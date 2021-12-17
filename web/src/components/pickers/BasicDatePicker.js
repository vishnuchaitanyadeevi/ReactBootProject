import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MobileDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export default function BasicDatePicker({
  label,
  minDate,
  maxDate,
  inputFormat,
  views,
  size = 'small',
  passVal,
  valueChange
}) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        value={passVal}
        onChange={valueChange}
        showTodayButton
        minDate={minDate}
        maxDate={maxDate}
        label={label}
        views={views === undefined || views === null ? ['year', 'month', 'day', 'hours', 'minutes'] : views}
        renderInput={(props) => <TextField fullWidth {...props} size={size} />}
        inputFormat={inputFormat === undefined || inputFormat === null ? 'dd-MM-yyyy hh:mm a' : inputFormat}
      />
    </LocalizationProvider>
  );
}
