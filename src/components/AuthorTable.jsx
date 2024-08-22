import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AuthorTable = ({ authors, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Birth Date</TableCell>
        <TableCell>Biography</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {authors.map((author) => (
        <TableRow key={author.id}>
          <TableCell>{author.name}</TableCell>
          <TableCell>{author.birthDate}</TableCell>
          <TableCell>{author.biography}</TableCell>
          <TableCell>
            <IconButton onClick={() => onEdit(author)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(author.id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default AuthorTable;
