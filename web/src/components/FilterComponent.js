import React from 'react';
import { TextField, Grid, Paper } from '@mui/material';

function FilterComponent() {
  const paperStyle = { padding: '30px 20px', margin: '20px auto' };
  return (
    <div>
      <Grid>
        <Paper style={paperStyle} elevation={1}>
          <Grid container spacing={2}>
            <TextField size="small" label="Stock Code" />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
export default FilterComponent;
