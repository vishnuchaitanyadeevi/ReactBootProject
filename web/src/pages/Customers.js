import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomersList from '../components/CustomersList';

function Customers() {
  return (
    <Grid>
      <div style={{ width: '100%', textAlign: 'center', paddingBottom: '15px' }}>
        <Typography variant="h4">Customers</Typography>
      </div>
      <CustomersList showDialog />
    </Grid>
  );
}

export default Customers;
