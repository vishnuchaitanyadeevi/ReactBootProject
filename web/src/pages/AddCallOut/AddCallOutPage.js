import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { isArray } from 'lodash';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import SimpleTable from '../../components/table/simpleTable';
import { PAYMENT_TYPE } from '../../components/ServiceBoard/data';
import useSettings from '../../hooks/useSettings';
import { COMPONENTS } from '../../utils/constants';
import './AddCallOutPage.scss';
import Tasks from './Task';
import SpareParts from './SpareParts';
import { POST_CONTRACTS, POST_SERVICE_SUBJECT } from '../../redux/constants';

function AddCallOutPage() {
  const dispatch = useDispatch();
  const { lang } = useSettings();
  const { t } = useTranslation();
  const masterData = useSelector((state) => state.MasterDataReducer);
  const { projects, serviceSubject, currency, customers, contracts, callOutReasons, serviceman, tasks } = masterData;
  const { TEXT_FIELD, SELECT_BOX, CHECKBOX, RADIO, AUTOCOMPLETE, DATEPICKER, TEXT_AREA, MULTI_SELECT_BOX } = COMPONENTS;
  const [payload, setPayload] = useState({});
  const [projectNames, setProjectNames] = useState([]);

  const [customerAddress, setCustomerAddress] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  const newTask = { service: '', task: '', notes: '' };
  const newSparePart = {
    service: '',
    description: '',
    stockCode: '',
    quantity: '',
    ratio: '',
    discountAmount: '',
    unitPrice: '',
    totalPrice: '',
    errorCode: '',
    serviceRelatedNote: ''
  };

  const updatePayload = (pairs) => setPayload({ ...payload, ...pairs });

  const handleChange = (key, val) => {
    // setPayload({ ...payload, [key]: val });
    updatePayload({ [key]: val });
    switch (key) {
      case 'customer': {
        const cust = customers?.find((cst) => cst.value === val);
        dispatch({ type: POST_CONTRACTS, data: cust?.contracts || [] });
        break;
      }
      case 'project':
        setProjectNames(typeof val === 'string' ? val.split(',') : val);
        break;
      case 'serviceSubject': {
        setProjectNames(typeof val === 'string' ? val.split(',') : val);
        let tasks = payload.tasks || [];
        let spareParts = payload.spareParts || [];
        if (isArray(tasks) && tasks.length > 0) {
          val.forEach((v) => {
            const serv = tasks.every((tsk) => tsk.service !== v.value);
            if (serv) {
              tasks.push({ ...newTask, service: v.value });
              spareParts.push({ ...newSparePart, service: v.value });
            }
          });
        } else {
          tasks = [{ ...newTask, service: val[0]?.value }];
          spareParts = [{ ...newSparePart, service: val[0]?.value }];
        }
        updatePayload({ tasks, spareParts, [key]: val });
        break;
      }
      default:
        break;
    }
    // if (key === 'customer') {
    //   const cust = customers?.find((cst) => cst.value === val);
    //   dispatch({ type: POST_CONTRACTS, data: cust?.contracts || [] });
    // }
  };

  const addNewTask = () => {
    const tasks = [...payload.tasks, newTask];
    updatePayload({ tasks });
  };
  const addNewSparePart = () => {
    const spareParts = [...payload.spareParts, newSparePart];
    updatePayload({ spareParts });
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
      columnWidth = 1.5,
      inputFormat = 'dd-MM-yyyy',
      views = ['year', 'month', 'day'],
      defaultValue = '',
      maxRows = 10,
      minRows = 4,
      menuProps = {},
      selectedVals = []
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
              onChange={(e) => handleChange(key, e.target.value)}
              inputFormat={inputFormat}
              views={views}
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
                onChange={(e, vals) => handleChange(key, e.target.value)}
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

  useEffect(() => {
    const customer = customers?.find((cust) => cust?.value === payload?.customer);
    if (customer) {
      setCustomerAddress(customer?.address);
    }
  }, [payload.customer]);

  useEffect(() => {
    const project = projects?.find((cust) => cust?.value === payload?.project);
    if (project) {
      const { location, serviceSubject } = project;
      setProjectLocation(location);
      if (isArray(serviceSubject)) {
        dispatch({ type: POST_SERVICE_SUBJECT, data: serviceSubject });
      } else {
        dispatch({ type: POST_SERVICE_SUBJECT, data: [] });
      }
    }
  }, [payload.project]);

  useEffect(() => {}, [projects]);

  return (
    <Grid className="Add_Call_out_main_cls">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {t('addCallout.addCallOut')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
        </Grid>
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'customer',
          label: 'addCallout.customer',
          placeholder: 'addCallout.customer',
          columnWidth: '5',
          options: customers
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'contract',
          label: 'addCallout.contracts',
          placeholder: 'addCallout.contracts',
          columnWidth: '3.5',
          options: contracts
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'calloutReason',
          label: 'addCallout.calloutReason',
          placeholder: 'addCallout.calloutReason',
          columnWidth: '3.5',
          options: callOutReasons
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'project',
          label: 'addCallout.project',
          placeholder: 'addCallout.project',
          columnWidth: '3',
          options: projects
        })}
        {renderComponent({
          control: MULTI_SELECT_BOX,
          key: 'serviceSubject',
          label: 'addCallout.serviceSubject',
          placeholder: 'addCallout.serviceSubject',
          columnWidth: '9',
          options: serviceSubject,
          controlStyle: { height: '2rem' },
          labelStyle: { marginTop: '-0.5rem' }
        })}
        {renderComponent({
          control: CHECKBOX,
          key: 'isFOLReplacement',
          label: 'addCallout.isFOLReplacement',
          placeholder: 'addCallout.isFOLReplacement',
          columnWidth: '3'
        })}
        {renderComponent({
          control: DATEPICKER,
          label: 'addCallout.date',
          inputFormat: 'dd-MM-yyyy',
          views: ['year', 'month', 'day'],
          columnWidth: '2'
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'serviceman',
          label: 'serviceDashboard.serviceman',
          placeholder: 'serviceDashboard.serviceman',
          columnWidth: '3.5',
          options: serviceman
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'serviceman',
          label: 'addCallout.paymentType',
          placeholder: 'addCallout.paymentType',
          columnWidth: '3.5',
          options: PAYMENT_TYPE
        })}
        <Grid item xs={12} sm={8.5}>
          <div>
            <span style={{ fontSize: '0.7rem' }}>
              {t('addCallout.customerAddress')} {lang}:
              <span
                style={{ color: 'rgb(136 137 140)', fontSize: '0.7rem', marginLeft: '0.2rem', marginBottom: '1rem' }}
              >
                {(customerAddress && customerAddress[lang]) || ''}
              </span>
            </span>
          </div>
          <div>
            <span style={{ fontSize: '0.7rem' }}>
              {t('serviceDashboard.location')}:
              <span
                style={{ color: 'rgb(136 137 140)', fontSize: '0.7rem', marginLeft: '0.2rem', marginBottom: '1rem' }}
              >
                {(projectLocation && projectLocation[lang]) || ''}
              </span>
            </span>
          </div>
        </Grid>
        {renderComponent({
          control: TEXT_FIELD,
          key: 'serviceFee',
          label: 'addCallout.serviceFee',
          placeholder: 'addCallout.serviceFee',
          columnWidth: '2.5'
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'currency',
          label: 'addCallout.currency',
          placeholder: 'addCallout.currency',
          columnWidth: '1',
          options: currency
        })}
        {renderComponent({
          control: TEXT_AREA,
          key: 'notes',
          label: 'addCallout.notes',
          placeholder: 'addCallout.notes',
          columnWidth: '12',
          controlStyle: { width: '100%', padding: '0.5rem', marginLeft: '1.5rem' }
        })}
        <Divider style={{ backgroundColor: '#c7d2fe', marginTop: '0.5rem' }} />
      </Grid>

      {/* Task Grid Container */}
      <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
        {/* Tabular layout */}
        {/* <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center">
            {t('addCallout.task')}
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <Tasks
            serviceSubjects={serviceSubject}
            lang={lang}
            tasks={payload.tasks}
            updatePayload={updatePayload}
            tasksList={tasks}
          />
          <Grid item xs={2} style={{ float: 'right' }}>
            <Button style={{ marginLeft: '0.5rem' }} variant="contained" size="small" onClick={() => addNewTask()}>
              {t('addCallout.addNewTasks')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: '#c7d2fe', marginTop: '0.8rem' }} />
      {/* Spare parts Grid Container */}
      <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
        {/* <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center">
            {t('addCallout.spareParts')}
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <SpareParts
            serviceSubjects={serviceSubject}
            lang={lang}
            spareParts={payload.spareParts}
            updatePayload={updatePayload}
          />
          <Grid item xs={2} style={{ float: 'right' }}>
            <Button style={{ marginLeft: '0.5rem' }} variant="contained" size="small" onClick={() => addNewSparePart()}>
              {t('addCallout.addNewPart')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* Button Grid Container */}
      <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
        <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={12}>
          <Button style={{ marginLeft: '0.5rem' }} variant="contained" size="small">
            {t('CreateProject.Save')}
          </Button>
          <Button color="warning" style={{ marginLeft: '0.5rem' }} variant="contained" size="small">
            {t('CreateProject.Back')}
          </Button>
          <Button color="secondary" style={{ marginLeft: '0.5rem' }} variant="contained" size="small">
            {t('addCallout.new')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddCallOutPage;
