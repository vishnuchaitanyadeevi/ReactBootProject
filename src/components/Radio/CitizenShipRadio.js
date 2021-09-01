import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CitizenShipRadioGroup() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Citizenship</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="Malaysiar" control={<Radio />} label="Malaysiar" />
        <FormControlLabel value="Foreigner" control={<Radio />} label="Foreigner" />
      </RadioGroup>
    </FormControl>
  );
}
