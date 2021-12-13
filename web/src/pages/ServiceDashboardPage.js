import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isArray } from 'lodash';
import { Grid, Stack, Button, MenuItem, TextField, Popover, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

import ServiceBoard from '../components/ServiceBoard/ServiceBoard';
import ServiceMens from '../components/ServiceBoard/ServiceMens';
import ServiceTypes from '../components/ServiceBoard/ServiceTypes';
import Filters from '../components/Filter/filter';
import { serviceDataEn, serviceDataAr, COLOR_CODES, FILTER_COMPONETS } from '../components/ServiceBoard/data';

import { MAX_LANES, GROUP_BY, THEME, LANGUAGE_CODES } from '../utils/constants';
import { sortListOfObjects } from '../utils/utils';
import useSettings from '../hooks/useSettings';

import '../components/ServiceBoard/ServiceBoard.css';

export default function ServiceDashboard() {
  const { t } = useTranslation();
  const { lang } = useSettings();

  const { SERVICE_MEN, CUSTOMER } = GROUP_BY;
  const [serviceData, setServiceData] = useState(serviceDataEn);
  const serviceDataLen = serviceData.length;
  const [start, setStart] = useState(0);
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(SERVICE_MEN);
  const [servicemenAnchorEl, setServicemenAnchorEl] = useState(null);
  const [serviceTypeAnchorEl, setServiceTypeAnchorEl] = useState(null);

  const { themeMode } = useSettings();
  const { DRK, LGT } = COLOR_CODES;

  const [colorCode, setColorCode] = useState(themeMode === THEME.LIGHT ? LGT : DRK);
  const {
    FILTER_BOX: { BORDER }
  } = colorCode;

  const checkValidUpdateForStart = (value) => {
    switch (true) {
      case value < 0:
        return 0;
      case value > serviceDataLen - MAX_LANES:
        return serviceDataLen - MAX_LANES;
      default:
        return value;
    }
  };

  const handleServicemenClick = (e) => {
    setServicemenAnchorEl(e.currentTarget);
    e.stopPropagation();
  };

  const handleServicemenClose = () => setServicemenAnchorEl(null);

  const servicemenOpen = Boolean(servicemenAnchorEl);

  const handleServiceTypeClick = (e) => {
    setServiceTypeAnchorEl(e.currentTarget);
    e.stopPropagation();
  };

  const handleServiceTypeClose = () => setServiceTypeAnchorEl(null);

  const serviceTypeOpen = Boolean(serviceTypeAnchorEl);

  const handleNextDay = () => {
    setStart(checkValidUpdateForStart(start + 1));
  };

  const handlePrevDay = () => {
    setStart(checkValidUpdateForStart(start - 1));
  };

  const handleNextWeek = () => {
    setStart(checkValidUpdateForStart(start + MAX_LANES));
  };

  const handlePrevWeek = () => {
    setStart(checkValidUpdateForStart(start - MAX_LANES));
  };

  const changeData = () => {
    if (isArray(serviceData)) {
      const tempData = serviceData.slice(start, MAX_LANES + start);
      if (sortBy === CUSTOMER) {
        // Sorting on address field
        tempData.forEach((lane) => {
          lane.cards = sortListOfObjects(lane.cards, 'address');
        });
      }
      setData(tempData);
    }
  };

  const handleSortByChange = (e) => {
    const val = e.target.value;
    setSortBy(val);
    alert(`${val} group by is selected`);
    changeData();
  };

  const getFilterData = (data) => {
    console.log('Filtered data: ', data);
  };

  useEffect(changeData, [start, serviceData]);
  useEffect(() => setColorCode(themeMode === THEME.LIGHT ? LGT : DRK), [themeMode]);
  useEffect(() => {
    setServiceData(lang === LANGUAGE_CODES.AR ? serviceDataAr : serviceDataEn);
  }, [lang]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="filter-section" style={{ borderColor: BORDER }}>
            <Filters components={FILTER_COMPONETS} apiUrl="dummyUrl" getFilterData={getFilterData} />
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack>
            <span className="ml-1rm mt-1rm">
              <ArrowBackIosIcon onClick={handlePrevWeek} className={`arr-icn ${start === 0 && 'disabled'}`} />
              <ArrowBackIosIcon onClick={handlePrevWeek} className={`arr-icn ${start === 0 && 'disabled'}`} />
              <ArrowBackIosIcon onClick={handlePrevDay} className={`arr-icn ml-1rm ${start === 0 && 'disabled'}`} />
              <ArrowForwardIosIcon
                onClick={handleNextDay}
                className={`arr-icn mr-1rm ml-1rm ${
                  (start > serviceDataLen || start + MAX_LANES >= serviceDataLen) && 'disabled'
                }`}
              />
              <ArrowForwardIosIcon
                onClick={handleNextWeek}
                className={`arr-icn ${
                  (start > serviceDataLen - start || start + MAX_LANES >= serviceDataLen) && 'disabled'
                }`}
              />
              <ArrowForwardIosIcon
                onClick={handleNextWeek}
                className={`arr-icn ${
                  (start > serviceDataLen - start || start + MAX_LANES >= serviceDataLen) && 'disabled'
                }`}
              />
            </span>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6.5} />
        <Grid item xs={12} md={2}>
          <Button variant="contained" className="mt-half-rm add-callout-btn mr-1rm pointer-cls">
            {t('serviceDashboard.addCallOut')}
          </Button>
          <Tooltip title={t(`serviceDashboard.serviceMen`)} arrow>
            <SupervisedUserCircleIcon
              className="mt-half-rm mr-1rm pointer-cls"
              style={{ float: 'right' }}
              onClick={handleServicemenClick}
            />
          </Tooltip>
          <Popover
            id="servicemen"
            open={servicemenOpen}
            anchorEl={servicemenAnchorEl}
            onClose={handleServicemenClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <ServiceMens />
          </Popover>
          <Tooltip title={t('serviceDashboard.service')} arrow>
            <HomeRepairServiceIcon
              className="mt-half-rm mr-1rm pointer-cls"
              style={{ float: 'right' }}
              onClick={handleServiceTypeClick}
            />
          </Tooltip>
          <Popover
            id="serviceType"
            open={serviceTypeOpen}
            anchorEl={serviceTypeAnchorEl}
            onClose={handleServiceTypeClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <ServiceTypes showTitle={false} emptyGridLen={0} iconsGridLen={12} leftMrgn="0" />
          </Popover>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <MenuItem>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
              <TextField
                size="small"
                select
                fullWidth
                label={t('serviceDashboard.sortBy')}
                placeholder={t('serviceDashboard.sortBy')}
                SelectProps={{ native: true }}
                onChange={handleSortByChange}
                value={sortBy}
                sx={{ ml: '10px', height: '30px' }}
              >
                {[SERVICE_MEN, CUSTOMER].map((sortBy) => (
                  <option key={sortBy} value={sortBy}>
                    {t(`serviceDashboard.${sortBy}`)}
                  </option>
                ))}
              </TextField>
            </Stack>
          </MenuItem>
        </Grid>
      </Grid>
      <Grid container className="service-board-grid">
        <ServiceBoard data={data} />
      </Grid>
    </>
  );
}
