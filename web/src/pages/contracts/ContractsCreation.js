import { Grid, TextField } from '@mui/material';
import React, { Fragment, useState } from 'react';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import './ContractsCreation.scss';

export default function ContractsCreation() {
  const countryArr = ['SA'];
  const customerArr = [11, 12, 414352, 5344, 2343];
  return (
    <Grid container spacing={3} padding={3}>
      <Grid container rowSpacing={2} columnSpacing={1} item xs={12} lg={6}>
        <h2>Customer Details</h2>
        <Grid container spacing={1} item xs={12} xl={6}>
          <Grid item xs={12} xl={6} md={6}>
            <AutocompleteWidget options={countryArr} size="small" label="Country" disablePortal autoSelect />
          </Grid>
          <Grid item xs={12} xl={6} md={6}>
            <TextField fullWidth label="Region" size="small" />
          </Grid>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <AutocompleteWidget options={customerArr} size="small" label="Customer No" disablePortal autoSelect />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={1} item xs={12} lg={6}>
        <h2>Contracts Details</h2>
      </Grid>
    </Grid>
  );
}
