import * as React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '2px',
      width: '95px'
    }
  }
}));

export default function AgeSection({ age }) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormLabel>Age</FormLabel>
      <TextField size="small" variant="outlined" value={age.years} label="Year(s)" />
      <TextField size="small" label="Month(s)" value={age.months} variant="outlined" />
      <TextField size="small" label="Day(s)" value={age.days} variant="outlined" />
    </form>
  );
}
