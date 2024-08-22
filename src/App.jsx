// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BookTablePage from './pages/BookTablePage';
import AuthorTablePage from './pages/AuthorTablePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<BookTablePage />} />
        <Route path="/authors" element={<AuthorTablePage />} />
      </Routes>
    </Router>
  );
};

export default App;
