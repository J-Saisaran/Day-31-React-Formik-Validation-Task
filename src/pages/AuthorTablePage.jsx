// src/pages/AuthorTablePage.jsx
import React, { useState } from 'react';
import { Typography, IconButton, Dialog, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AuthorTable from '../components/AuthorTable';
import AuthorForm from '../components/AuthorForm';

const AuthorTablePage = () => {
  const [authors, setAuthors] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [formValues, setFormValues] = useState({});

  const handleOpenForm = (values = {}) => {
    setFormValues(values);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setFormValues({});
  };

  const handleAddAuthor = (author) => {
    setAuthors([...authors, { ...author, id: Date.now() }]);
    handleCloseForm();
  };

  const handleEditAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => author.id === updatedAuthor.id ? updatedAuthor : author));
    handleCloseForm();
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Authors Management</Typography>
      <IconButton onClick={() => handleOpenForm()}>
        <AddIcon />
      </IconButton>
      <AuthorTable authors={authors} onEdit={handleOpenForm} onDelete={handleDeleteAuthor} />

      <Dialog open={openForm} onClose={handleCloseForm} maxWidth="sm" fullWidth>
        <DialogTitle>{formValues.id ? 'Edit Author' : 'Add Author'}</DialogTitle>
        <AuthorForm
          initialValues={formValues}
          onSubmit={formValues.id ? handleEditAuthor : handleAddAuthor}
          onCancel={handleCloseForm}
        />
      </Dialog>
    </div>
  );
};

export default AuthorTablePage;
