import { useState, useEffect } from 'react';
import { isArray } from 'lodash';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Grid,
  FormControlLabel,
  FormControl,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
  Autocomplete,
  Box,
  FormLabel,
  Collapse,
  Typography
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import useSettings from '../../hooks/useSettings';
import { COMPONENTS, LANGUAGES_CODES_RTL_ORIENTATION } from '../../utils/constants';

export default function Filters({ components, apiUrl, getFilterData, getFilterDataPayloadChange }) {
  const { t } = useTranslation();
  const { lang } = useSettings();
  const { TEXT_FIELD, SELECT_BOX, CHECKBOX, RADIO, AUTOCOMPLETE } = COMPONENTS;
  const [payload, setPayload] = useState({});
  const [open, setOpen] = useState(true);

  const rightDir = LANGUAGES_CODES_RTL_ORIENTATION.includes(lang);

  const handleChange = (key, val) => {
    setPayload({ ...payload, [key]: val });
    getFilterDataPayloadChange(key, val);
  };

  const handleClick = () => setOpen(!open);

  const handleClearFilters = () => {
    setPayload({});
    getFilterData({});
  };

  const handleGetData = () => {
    console.log(`Getting data from ${apiUrl} API with filters: `, payload);
    getFilterData(payload);
  };

  const renderComponent = (metaData, ind) => {
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
      columnWidth = 1.5
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
              type={isPasswordField ? 'password' : 'text'}
              select={select}
              fullWidth={fullWidth}
              label={t([label])}
              placeholder={t([placeholder])}
              SelectProps={{ native: true }}
              onChange={(e) => handleChange(key, e.target.value)}
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
                  onChange={(e) => handleChange(key, e.target.checked)}
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
                onChange={(e) => handleChange(key, e.target.value)}
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
              onChange={(e, val) => val && handleChange(key, val?.value)}
              value={payload[key] ? options.find((v) => payload[key] === v.value) : null}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  {option.name[lang]}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  fullWidth={fullWidth}
                  placeholder={t([placeholder])}
                  SelectProps={{ native: true }}
                  variant={variant || 'outlined'}
                  size={size || 'small'}
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
      default:
        return '';
    }
  };
  return (
    <>
      <Typography variant="h5">
        {t('filter.filter')}
        {open ? (
          <KeyboardArrowUpIcon
            onClick={handleClick}
            style={{ cursor: 'pointer', float: rightDir ? 'left' : 'right' }}
          />
        ) : (
          <KeyboardArrowDownIcon
            onClick={handleClick}
            style={{ cursor: 'pointer', float: rightDir ? 'left' : 'right' }}
          />
        )}
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {isArray(components) && (
          <Grid container>
            {components.map((comp, ind) => renderComponent(comp, ind))}
            <Button variant="contained" onClick={handleGetData} style={{ margin: '0.5rem' }}>
              <SearchIcon />
              {t('filter.filter')}
            </Button>
            <Button variant="contained" onClick={handleClearFilters} style={{ margin: '0.5rem' }}>
              <ClearIcon />
              {t('filter.clear')}
            </Button>
          </Grid>
        )}
      </Collapse>
    </>
  );
}
