import React from 'react';
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  InputAdornment
} from '@mui/material';

function RadioGroupComponent({ title, options, onChange, value }) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend" style={{ color: '#919EAB' }}>
          {title}
        </FormLabel>
        <RadioGroup onChange={onChange} row aria-label="ExecutionType" name="row-radio-buttons-group" value={value}>
          {options.map((option) => (
            <FormControlLabel value={option.val} control={<Radio />} label={option.name} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioGroupComponent;
