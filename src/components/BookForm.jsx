// src/components/BookForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { Button, Box, DialogActions } from '@mui/material';

const BookForm = ({ initialValues, onSubmit, onCancel }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} padding={2}>
            <Field
              component={TextField}
              name="title"
              label="Title"
              fullWidth
            />
            <Field
              component={TextField}
              name="author"
              label="Author"
              fullWidth
            />
            <Field
              component={TextField}
              name="isbn"
              label="ISBN"
              fullWidth
            />
            <Field
              component={TextField}
              name="publicationDate"
              label="Publication Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Box>
          <DialogActions>
            <Button onClick={onCancel} color="primary" disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" color="primary" disabled={isSubmitting}>
              {initialValues.id ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
