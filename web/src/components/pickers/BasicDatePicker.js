import * as React from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { MobileDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import moment from 'moment';

export default function BasicDatePicker({
  label,
  minDate,
  maxDate,
  inputFormat,
  views,
  size = 'small',
  value,
  error,
  helperText,
  FormHelperTextProps,
  disabled,
  getSelectedDate,
  getIsoDate
}) {
  const handleDateChange = (dt) => {
    getSelectedDate(new Date(dt));
    getIsoDate(moment(dt).toISOString());
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        value={value === '' ? null : value}
        onChange={handleDateChange}
        showTodayButton
        minDate={minDate}
        maxDate={maxDate}
        cancelText={null}
        label={label}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <DateRangeIcon />
            </InputAdornment>
          )
        }}
        views={views === undefined || views === null ? ['year', 'month', 'day', 'hours', 'minutes'] : views}
        renderInput={(props) => (
          <TextField
            fullWidth
            {...props}
            size={size}
            error={error}
            helperText={helperText}
            FormHelperTextProps={FormHelperTextProps}
            defaultValue="10-02-2020"
          />
        )}
        inputFormat={inputFormat === undefined || inputFormat === null ? 'dd-MM-yyyy hh:mm a' : inputFormat}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
}
