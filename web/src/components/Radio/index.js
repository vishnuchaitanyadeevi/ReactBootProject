import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"> </FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="Non-collected" control={<Radio />} label="Non-collected" />
        <FormControlLabel value="collected" control={<Radio />} label="collected" />
        <FormControlLabel value="dispatched" control={<Radio />} label="dispatched" />
      </RadioGroup>
    </FormControl>
  );
}
