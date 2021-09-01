import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';

export default function BasicDateRangePicker({ size = 'small', bool = false, onChange }) {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="From Date"
        endText="To Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          onChange(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            {(startProps.helperText = '')}
            {(endProps.helperText = '')}
            <TextField size={size} InputLabelProps={{ style: { fontSize: 13 } }} {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField size={size} InputLabelProps={{ style: { fontSize: 13 } }} {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
}
