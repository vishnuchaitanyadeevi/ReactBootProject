// import React from 'react';
import { isArray } from 'lodash';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Grid,
  Divider,
  FormControlLabel,
  FormControl,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
  Autocomplete,
  Box,
  FormLabel,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  Chip
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import BasicDatePicker from './pickers/BasicDatePicker';
// import BasicDatePicker from '../components';
import { COMPONENTS } from '../utils/constants';
import useSettings from '../hooks/useSettings';

const { TEXT_FIELD, SELECT_BOX, CHECKBOX, RADIO, AUTOCOMPLETE, DATEPICKER, TEXT_AREA, MULTI_SELECT_BOX } = COMPONENTS;

const RenderComponent = ({ payload, metaData, ind, handleChange }) => {
  const { t } = useTranslation();
  const { lang } = useSettings();

  const createComponent = () => {
    const {
      control,
      isPasswordField = false,
      variant,
      key,
      showLabel = false,
      label,
      placeholder,
      size,
      options,
      labelStyle,
      controlStyle,
      groupStyle,
      select = false,
      fullWidth = true,
      columnWidth = 1.5,
      inputFormat = 'dd-MM-yyyy',
      views = ['year', 'month', 'day'],
      defaultValue = '',
      maxRows = 10,
      minRows = 4,
      menuProps = {},
      selectedVals = [],
      type = 'text'
    } = metaData;

    switch (control) {
      case TEXT_FIELD:
      case SELECT_BOX:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            {showLabel && <FormLabel style={labelStyle}>{t([label])}</FormLabel>}
            <TextField
              variant={variant || 'outlined'}
              size={size || 'small'}
              type={isPasswordField ? 'password' : type}
              select={select}
              fullWidth={fullWidth}
              label={t([label])}
              placeholder={t([placeholder])}
              SelectProps={{ native: true }}
              onChange={(e) => handleChange(key, e.target.value, ind)}
              value={payload[key] || ''}
              style={{ ...controlStyle }}
            >
              {select && isArray(options) && (
                <>
                  <option key={key} value="" />
                  {options.map((item) => (
                    <option key={item.value} disabled={item.isDisabled} value={item.value}>
                      {item.name[lang]}
                    </option>
                  ))}
                </>
              )}
            </TextField>
          </Grid>
        );
      case CHECKBOX:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            <FormControlLabel
              label={t([label])}
              control={
                <Checkbox
                  style={{ ...controlStyle }}
                  checked={payload[key] || false}
                  onChange={(e) => handleChange(key, e.target.checked, ind)}
                />
              }
            />
          </Grid>
        );
      case RADIO:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            <FormControl component="fieldset">
              {showLabel && <FormLabel style={labelStyle}>{t([label])}</FormLabel>}
              <RadioGroup
                row
                aria-label={label}
                value={payload[key] || ''}
                name={label}
                onChange={(e) => handleChange(key, e.target.value, ind)}
              >
                {options.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    disabled={item.isDisabled}
                    control={<Radio />}
                    label={t([item.label])}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        );
      case AUTOCOMPLETE:
        return (
          <Grid item xs={12} sm={columnWidth} key={`${key}-${ind}`} style={{ ...groupStyle }}>
            <Autocomplete
              id={key}
              options={options}
              getOptionLabel={(option) => option.name[lang]}
              onChange={(e, val) => val && handleChange(key, val?.value, ind)}
              value={payload[key] ? options.find((v) => payload[key] === v.value) : null}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  {option.name[lang]}
                </Box>
              )}
              size={size || 'small'}
              renderInput={(params) => (
                <TextField
                  fullWidth={fullWidth}
                  placeholder={t([placeholder])}
                  SelectProps={{ native: true }}
                  variant={variant || 'outlined'}
                  {...params}
                  label={t([label])}
                  inputProps={{
                    ...params.inputProps
                  }}
                />
              )}
            />
          </Grid>
        );
      case DATEPICKER:
        return (
          <Grid item xs={12} sm={columnWidth} key={`${key}-${ind}`} style={{ ...groupStyle }}>
            <BasicDatePicker
              label={t([label])}
              onChange={(e) => handleChange(key, e.target.value, ind)}
              inputFormat={inputFormat}
              views={views}
              value={payload[key]}
              getSelectedDate={(dt) => null}
              getIsoDate={(dt) => handleChange(key, dt, ind)}
            />
          </Grid>
        );
      case TEXT_AREA:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            <TextareaAutosize
              maxRows={maxRows}
              minRows={minRows}
              aria-label={t([label])}
              placeholder={t([placeholder])}
              defaultValue={defaultValue}
              style={controlStyle}
              onChange={(e) => handleChange(key, e.target.value, ind)}
            />
          </Grid>
        );
      case MULTI_SELECT_BOX:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            <FormControl style={{ width: '100%' }}>
              <InputLabel style={labelStyle} id={`${key}-chip-label`}>
                {t([label])}
              </InputLabel>
              <Select
                labelId={`${key}-chip-label`}
                id={`${key}-chip-id`}
                multiple
                value={payload[key] || []}
                onChange={(e, vals) => handleChange(key, e.target.value, ind)}
                input={<OutlinedInput id={`${key}-select-chip-id`} label={t([label])} />}
                // renderValue={(selected) => (
                //   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                //     {selected?.map((item) => (
                //       <Chip key={item.name[lang]} label={item.name[lang]} />
                //     ))}
                //   </Box>
                // )}
                MenuProps={menuProps}
                style={controlStyle}
              >
                {options.map((item, ind) => (
                  // <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                  <MenuItem key={`${item}-${ind}`} value={item}>
                    {item.name[lang]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      default:
        return '';
    }
  };

  return createComponent();
};

export default RenderComponent;
