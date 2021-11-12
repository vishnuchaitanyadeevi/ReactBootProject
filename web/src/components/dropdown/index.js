import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

export default function ControlledOpenSelect({ label, li, value, className, handleSelectedValue }) {
  return (
    <div>
      <Autocomplete
        options={li}
        onChange={(event, newValue) => handleSelectedValue(event, newValue)}
        value={value}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}
