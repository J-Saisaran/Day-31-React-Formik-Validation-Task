import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookTable = ({ books, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>ISBN</TableCell>
        <TableCell>Publication Date</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {books.map((book) => (
        <TableRow key={book.id}>
          <TableCell>{book.title}</TableCell>
          <TableCell>{book.author}</TableCell>
          <TableCell>{book.isbn}</TableCell>
          <TableCell>{book.publicationDate}</TableCell>
          <TableCell>
            <IconButton onClick={() => onEdit(book)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(book.id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default BookTable;
