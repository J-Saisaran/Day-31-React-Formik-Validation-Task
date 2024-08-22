// src/pages/Dashboard.jsx
import React from 'react';
import { Card, CardContent, Typography, Grid, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for additional styling

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }} // Center content vertically
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Library Management Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card className="dashboard-card">
            <CardActionArea onClick={() => navigate('/authors')}>
              <CardContent>
                <Typography variant="h5" align="center">
                  Manage Authors
                </Typography>
                <Typography align="center">
                  Click here to manage author records
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card className="dashboard-card">
            <CardActionArea onClick={() => navigate('/books')}>
              <CardContent>
                <Typography variant="h5" align="center">
                  Manage Books
                </Typography>
                <Typography align="center">
                  Click here to manage book records
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
       
      </Grid>
    </div>
  );
};

export default Dashboard;
