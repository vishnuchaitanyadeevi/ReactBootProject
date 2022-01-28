import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { serviceDataEn, serviceDataAr, SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../components/ServiceBoard/data';
import DialogComponent from '../components/Dialog';

import { MAX_LANES, GROUP_BY, LANGUAGE_CODES, COMPONENTS } from '../utils/constants';
import { sortListOfObjects } from '../utils/utils';
import useSettings from '../hooks/useSettings';
import { POST_OFFICE } from '../redux/constants';

import '../components/ServiceBoard/ServiceBoard.css';

export default function ServiceDashboard() {
  const { t } = useTranslation();
  const { lang } = useSettings();

  const masterData = useSelector((state) => state.MasterDataReducer);
  const dispatch = useDispatch();

  const { SERVICE_MEN, CUSTOMER } = GROUP_BY;
  const [serviceData, setServiceData] = useState(serviceDataEn);
  const serviceDataLen = serviceData.length;
  const [start, setStart] = useState(0);
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(SERVICE_MEN);
  const [servicemenAnchorEl, setServicemenAnchorEl] = useState(null);
  const [serviceTypeAnchorEl, setServiceTypeAnchorEl] = useState(null);
  const [cardDialog, setCardDialog] = useState(false);

  const { TEXT_FIELD, AUTOCOMPLETE, CHECKBOX } = COMPONENTS;

  const FILTER_COMPONETS = [
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'country',
      label: 'serviceDashboard.country',
      placeholder: 'serviceDashboard.country',
      options: masterData?.country
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'office',
      label: 'serviceDashboard.office',
      placeholder: 'serviceDashboard.office',
      options: masterData?.office
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'business',
      label: 'serviceDashboard.business',
      placeholder: 'serviceDashboard.business',
      options: masterData?.business
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'office',
      label: 'serviceDashboard.contract',
      placeholder: 'serviceDashboard.contract',
      options: masterData?.contract
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'office',
      label: 'CreateProject.ProjectStatus',
      placeholder: 'CreateProject.ProjectStatus',
      options: masterData?.projectStatus
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'office',
      label: 'serviceDashboard.status',
      placeholder: 'serviceDashboard.status',
      options: masterData?.status
    },
    {
      control: CHECKBOX,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'lastProjectService',
      label: 'serviceDashboard.lastProjectService',
      placeholder: 'serviceDashboard.lastProjectService',
      columnWidth: 2
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'customerName',
      label: 'serviceDashboard.customerName',
      placeholder: 'serviceDashboard.customerName'
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'office',
      label: 'serviceDashboard.location',
      placeholder: 'serviceDashboard.location',
      options: masterData?.location
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'office',
      label: 'serviceDashboard.serviceman',
      placeholder: 'serviceDashboard.serviceman',
      options: masterData?.serviceman
    }
  ];

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

  const handleCardDialogClose = () => setCardDialog(false);

  const handleCardDialogOpen = () => setCardDialog(true);

  const handleCardClick = (cardId, cardDetails, laneId) => {
    handleCardDialogOpen();
    console.log(`${cardId} clicked from ${laneId}: `, cardDetails);
  };

  const getFilterData = (data) => {
    console.log('Filtered data: ', data);
  };

  const getFilterDataPayloadChange = (key, val) => {
    console.log(key, val);
    if (key === 'country') {
      const country = SEVICE_DASHBOARD_FILTER_MASTER_DATA.OFFICE.find((office) => office.country === val);
      if (country) {
        dispatch({ type: POST_OFFICE, data: country.offices });
      }
    }
  };

  useEffect(changeData, [start, serviceData]);

  useEffect(() => {
    setServiceData(lang === LANGUAGE_CODES.AR ? serviceDataAr : serviceDataEn);
  }, [lang]);

  return (
    <>
      <Grid container>
        <DialogComponent
          open={cardDialog}
          handleClose={handleCardDialogClose}
          handleProceed={handleCardDialogClose}
          title="Customer and contact details"
          proceedButtonText="Ok"
        />
        <Grid item xs={12}>
          <Filters
            components={FILTER_COMPONETS}
            apiUrl="dummyUrl"
            getFilterData={getFilterData}
            getFilterDataPayloadChange={getFilterDataPayloadChange}
          />
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
          <Tooltip title={t('serviceDashboard.serviceStatus')} arrow>
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
            <ServiceTypes />
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
        <ServiceBoard data={data} onCardClick={handleCardClick} />
      </Grid>
    </>
  );
}
