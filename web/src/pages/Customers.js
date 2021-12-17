import React from 'react';
import { Grid } from '@mui/material';
import CustomersList from '../components/CustomersList';

function Customers() {
  return (
    <Grid>
      <CustomersList showDialog />
    </Grid>
  );
}

export default Customers;
