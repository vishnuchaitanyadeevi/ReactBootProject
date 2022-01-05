import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, Divider, Button, Typography } from '@mui/material';
import { isArray } from 'lodash';
import { PAYMENT_TYPE } from '../../components/ServiceBoard/data';
import RenderComponent from '../../components/RenderComponent';
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
  const { TEXT_FIELD, CHECKBOX, AUTOCOMPLETE, DATEPICKER, TEXT_AREA, MULTI_SELECT_BOX } = COMPONENTS;
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

  const componentsSet1 = [
    {
      control: AUTOCOMPLETE,
      key: 'customer',
      label: 'addCallout.customer',
      placeholder: 'addCallout.customer',
      columnWidth: '5',
      options: customers
    },
    {
      control: AUTOCOMPLETE,
      key: 'contract',
      label: 'addCallout.contracts',
      placeholder: 'addCallout.contracts',
      columnWidth: '3.5',
      options: contracts
    },
    {
      control: AUTOCOMPLETE,
      key: 'calloutReason',
      label: 'addCallout.calloutReason',
      placeholder: 'addCallout.calloutReason',
      columnWidth: '3.5',
      options: callOutReasons
    },
    {
      control: AUTOCOMPLETE,
      key: 'project',
      label: 'addCallout.project',
      placeholder: 'addCallout.project',
      columnWidth: '3',
      options: projects
    },
    {
      control: MULTI_SELECT_BOX,
      key: 'serviceSubject',
      label: 'addCallout.serviceSubject',
      placeholder: 'addCallout.serviceSubject',
      columnWidth: '9',
      options: serviceSubject,
      controlStyle: { height: '2rem' },
      labelStyle: { marginTop: '-0.5rem' }
    },
    {
      control: CHECKBOX,
      key: 'isFOLReplacement',
      label: 'addCallout.isFOLReplacement',
      placeholder: 'addCallout.isFOLReplacement',
      columnWidth: '3'
    },
    {
      control: DATEPICKER,
      key: 'date',
      label: 'addCallout.date',
      inputFormat: 'dd-MM-yyyy',
      views: ['year', 'month', 'day'],
      columnWidth: '2'
    },
    {
      control: AUTOCOMPLETE,
      key: 'serviceman',
      label: 'serviceDashboard.serviceman',
      placeholder: 'serviceDashboard.serviceman',
      columnWidth: '3.5',
      options: serviceman
    },
    {
      control: AUTOCOMPLETE,
      key: 'paymentType',
      label: 'addCallout.paymentType',
      placeholder: 'addCallout.paymentType',
      columnWidth: '3.5',
      options: PAYMENT_TYPE
    }
  ];

  const componentsSet2 = [
    {
      control: TEXT_FIELD,
      key: 'serviceFee',
      label: 'addCallout.serviceFee',
      placeholder: 'addCallout.serviceFee',
      columnWidth: '2.5'
    },
    {
      control: AUTOCOMPLETE,
      key: 'currency',
      label: 'addCallout.currency',
      placeholder: 'addCallout.currency',
      columnWidth: '1',
      options: currency
    },
    {
      control: TEXT_AREA,
      key: 'notes',
      label: 'addCallout.notes',
      placeholder: 'addCallout.notes',
      columnWidth: '12',
      controlStyle: { width: '100%', padding: '0.5rem', marginLeft: '1.5rem' }
    }
  ];

  const updatePayload = (pairs) => setPayload({ ...payload, ...pairs });

  const handleChange = (key, val) => {
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
        {componentsSet1.map((comp) => (
          <RenderComponent metaData={comp} payload={payload} ind={1} handleChange={handleChange} />
        ))}
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
        {componentsSet2.map((comp) => (
          <RenderComponent metaData={comp} payload={payload} ind={1} handleChange={handleChange} />
        ))}
        {/* <RenderComponent
          metaData={{
            control: TEXT_FIELD,
            key: 'serviceFee',
            label: 'addCallout.serviceFee',
            placeholder: 'addCallout.serviceFee',
            columnWidth: '2.5'
          }}
          payload={payload}
          ind={9}
          handleChange={handleChange}
        />
        <RenderComponent
          metaData={{
            control: AUTOCOMPLETE,
            key: 'currency',
            label: 'addCallout.currency',
            placeholder: 'addCallout.currency',
            columnWidth: '1',
            options: currency
          }}
          payload={payload}
          ind={9}
          handleChange={handleChange}
        />
        <RenderComponent
          metaData={{
            control: TEXT_AREA,
            key: 'notes',
            label: 'addCallout.notes',
            placeholder: 'addCallout.notes',
            columnWidth: '12',
            controlStyle: { width: '100%', padding: '0.5rem', marginLeft: '1.5rem' }
          }}
          payload={payload}
          ind={9}
          handleChange={handleChange}
        /> */}
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
