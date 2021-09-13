import * as React from 'react';
import { TextField, FormGroup, Autocomplete } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ControlledOpenSelect from './dropdown';

// styles
import './Components.scss';

export default function DropdownPrefixedTextfield({ prefixList, prefixValue, textLabel }) {
  return (
    <form noValidate autoComplete="off">
      <FormGroup row>
        <Autocomplete
          clearIcon=""
          options={prefixList}
          className="prefixDropdown"
          value={prefixValue}
          renderInput={(params) => (
            <TextField
              {...params}
              value={prefixValue}
              className="prefixClass"
              InputLabelProps={{ style: { fontSize: 13 } }}
              size="small"
            />
          )}
        />
        <TextField className="prefixedTextField" size="small" label={textLabel} variant="outlined" />
      </FormGroup>
    </form>
  );
}
