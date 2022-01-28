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
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import BasicDatePicker from '../pickers/BasicDatePicker';
import useSettings from '../../hooks/useSettings';
import { COMPONENTS, LANGUAGES_CODES_RTL_ORIENTATION, THEME } from '../../utils/constants';
import { COLOR_CODES } from '../ServiceBoard/data';
import RenderComponent from '../RenderComponent';

import '../ServiceBoard/ServiceBoard.css';

export default function Filters({
  components,
  apiUrl,
  getFilterData,
  getFilterDataPayloadChange,
  displayBorder = true
}) {
  const { t } = useTranslation();
  const { lang, themeMode } = useSettings();
  const { TEXT_FIELD, SELECT_BOX, CHECKBOX, RADIO, AUTOCOMPLETE, DATEPICKER } = COMPONENTS;
  const [payload, setPayload] = useState({});
  const [open, setOpen] = useState(true);

  const { DRK, LGT } = COLOR_CODES;
  const [colorCode, setColorCode] = useState(themeMode === THEME.LIGHT ? LGT : DRK);
  const {
    FILTER_BOX: { BORDER, BTN_TEXT },
    CARD: { TXT }
  } = colorCode;

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
  return (
    <div className={displayBorder ? 'filter-section' : ''} style={{ borderColor: BORDER }}>
      <Typography variant="h5" style={{ color: TXT, marginBottom: '0.5rem' }}>
        {open ? <ArrowDropUpIcon onClick={handleClick} /> : <ArrowDropDownIcon onClick={handleClick} />}
        {t('filter.filters')}
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {isArray(components) && (
          <Grid container>
            {components.map((comp, ind) => (
              <RenderComponent metaData={comp} payload={payload} ind={ind} handleChange={handleChange} />
            ))}
            <Button variant="contained" onClick={handleGetData} style={{ margin: '0.5rem', color: BTN_TEXT }}>
              <SearchIcon />
              {t('filter.filter')}
            </Button>
            <Button variant="contained" onClick={handleClearFilters} style={{ margin: '0.5rem', color: BTN_TEXT }}>
              <ClearIcon />
              {t('filter.clear')}
            </Button>
          </Grid>
        )}
      </Collapse>
    </div>
  );
}
