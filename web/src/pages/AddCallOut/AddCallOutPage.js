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
  Typography
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { isArray } from 'lodash';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import SimpleTable from '../../components/table/simpleTable';
import { PAYMENT_TYPE } from '../../components/ServiceBoard/data';
import useSettings from '../../hooks/useSettings';
import { COMPONENTS } from '../../utils/constants';
import './AddCallOutPage.scss';

function AddCallOutPage() {
  const { lang } = useSettings();
  const { t } = useTranslation();
  const masterData = useSelector((state) => state.MasterDataReducer);
  const { TEXT_FIELD, SELECT_BOX, CHECKBOX, RADIO, AUTOCOMPLETE, DATEPICKER, TEXT_AREA } = COMPONENTS;
  const [payload, setPayload] = useState({});

  const jsonData = [
    {
      id: 1,
      serviceSubject: 'Service Subject 1',
      taskName: 'Task Name 1',
      note: 'Testing note... 1'
    },
    {
      id: 2,
      serviceSubject: 'Service Subject 2',
      taskName: 'Task Name 2',
      note: 'Testing note... 2'
    }
  ];
  const [taskData, setTaskData] = useState(jsonData);
  const [sparePartData, setSparePartData] = useState([]);
  const [editingRows, setEditingRows] = useState({});
  const [customerAddress, setCustomerAddress] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  const columnDataForTask = [
    {
      field: 'serviceSubject',
      header: 'Service Subject',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'taskName',
      header: 'Task Name',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'note',
      header: 'Note',
      editorElement: 'text',
      sortable: true,
      filter: true
    }
  ];

  const columnDataForSparePart = [
    {
      field: 'stockCode',
      header: 'Stock Code',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'description',
      header: 'Description',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'quantity',
      header: 'Quantity',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'ratio',
      header: 'Ratio',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'action',
      header: 'Action',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'discountAmount',
      header: 'Discount Amount',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'unitPrice',
      header: 'Unit Price',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'totalPrice',
      header: 'Total Price',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'errorCode',
      header: 'Error Code',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'serviceRelatedNote',
      header: 'Service Related Note',
      editorElement: 'text',
      sortable: true,
      filter: true
    }
  ];

  const handleChange = (key, val) => setPayload({ ...payload, [key]: val });

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
      minRows = 4
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
          <TextareaAutosize
            maxRows={maxRows}
            minRows={minRows}
            aria-label={t([label])}
            placeholder={t([placeholder])}
            defaultValue={defaultValue}
            style={controlStyle}
          />
        );
      default:
        return '';
    }
  };

  useEffect(() => {
    const customer = masterData?.customers?.find((cust) => cust?.value === payload?.customer);
    if (customer) {
      setCustomerAddress(customer?.address);
    }
  }, [payload.customer]);

  useEffect(() => {
    const project = masterData?.projects?.find((cust) => cust?.value === payload?.project);
    if (project) {
      setProjectLocation(project?.location);
    }
  }, [payload.project]);

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
          options: masterData?.customers
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'contract',
          label: 'addCallout.contracts',
          placeholder: 'addCallout.contracts',
          columnWidth: '3.5',
          options: masterData?.contracts
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'calloutReason',
          label: 'addCallout.calloutReason',
          placeholder: 'addCallout.calloutReason',
          columnWidth: '3.5',
          options: masterData?.callOutReasons
        })}
        {renderComponent({
          control: AUTOCOMPLETE,
          key: 'project',
          label: 'addCallout.project-ServiceSubject',
          placeholder: 'addCallout.project-ServiceSubject',
          columnWidth: '12',
          options: masterData?.projects
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
          options: masterData?.serviceman
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
          options: masterData.currency
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
        <Grid item xs={12}>
          <SimpleTable
            rowData={taskData}
            headerData={columnDataForTask}
            paginator
            rowsPerPageOptions={[10, 20, 50, 100]}
            rows={10}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            // editingRows={editingRows}
            dataKey="id"
            editMode="row"
            type="text"
            title="View project"
            editOption
            btnLabel="Add New Task"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center">
            {t('addCallout.task')}
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: '#c7d2fe', marginTop: '0.8rem' }} />
      {/* Spare parts Grid Container */}
      <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center">
            {t('addCallout.spareParts')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SimpleTable
            rowData={sparePartData}
            headerData={columnDataForSparePart}
            paginator
            rowsPerPageOptions={[10, 20, 50, 100]}
            rows={10}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            editingRows={editingRows}
            dataKey="id"
            editMode="row"
            showActionColumn
            type="text"
            title="View project"
            editOption
            btnLabel={t('addCallout.spareParts')}
          />
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
