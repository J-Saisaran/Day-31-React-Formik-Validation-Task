// src/pages/BookTablePage.jsx
import React, { useState } from 'react';
import { Typography, IconButton, Dialog, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BookTable from '../components/BookTable';
import BookForm from '../components/BookForm';
import './BookTablePage.css'; // Import the CSS file for additional styling

const BookTablePage = () => {
  const [books, setBooks] = useState([]);
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

  const handleAddBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
    handleCloseForm();
  };

  const handleEditBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    handleCloseForm();
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="book-table-container">
      <Typography variant="h4" gutterBottom>Books Management</Typography>
      <IconButton onClick={() => handleOpenForm()} color="primary">
        <AddIcon />
      </IconButton>
      <BookTable books={books} onEdit={handleOpenForm} onDelete={handleDeleteBook} />

      <Dialog open={openForm} onClose={handleCloseForm} maxWidth="sm" fullWidth>
        <DialogTitle>{formValues.id ? 'Edit Book' : 'Add Book'}</DialogTitle>
        <BookForm
          initialValues={formValues}
          onSubmit={formValues.id ? handleEditBook : handleAddBook}
          onCancel={handleCloseForm}
        />
      </Dialog>
    </div>
  );
};

export default BookTablePage;
