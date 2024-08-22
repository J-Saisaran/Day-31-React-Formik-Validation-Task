// src/components/AuthorForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { Button, Box, DialogActions } from '@mui/material';

const AuthorForm = ({ initialValues, onSubmit, onCancel }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Author name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
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
              name="name"
              label="Name"
              fullWidth
            />
            <Field
              component={TextField}
              name="birthDate"
              label="Birth Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <Field
              component={TextField}
              name="biography"
              label="Biography"
              multiline
              rows={4}
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

export default AuthorForm;
