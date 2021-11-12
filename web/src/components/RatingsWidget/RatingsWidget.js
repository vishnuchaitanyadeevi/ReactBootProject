import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingsWidget({
  name,
  precision,
  disabled,
  defaultValue,
  emptyIcon,
  emptyLabelText,
  icon,
  max,
  size,
  onChange
}) {
  return (
    <Stack spacing={1}>
      <Rating
        defaultValue={defaultValue === undefined || defaultValue === null ? 0 : defaultValue}
        precision={precision === undefined || precision === null ? 1 : precision}
        emptyIcon={emptyIcon === undefined || emptyIcon === null ? undefined : emptyIcon}
        emptyLabelText={emptyLabelText === undefined || emptyLabelText === null ? 'Empty' : emptyLabelText}
        icon={icon === undefined || icon === null ? undefined : icon}
        disabled={disabled === undefined || disabled === null ? false : disabled}
        max={max === undefined || max === null ? 7 : max}
        size={size === undefined || size === null ? 'medium' : size}
        name={name}
        onChange={onChange}
      />
    </Stack>
  );
}
