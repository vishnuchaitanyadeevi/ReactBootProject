import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, TextField, Button, Divider } from '@mui/material';
import { FilterMatchMode } from 'primereact/api';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import DataTable from '../../components/DataTable';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import Filters from '../../components/Filter/filter';
import { COMPONENTS } from '../../utils/constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../components/ServiceBoard/data';
import { POST_OFFICE } from '../../redux/constants';
import { getContractData } from './ContractService';
import './ContractList.scss';

function ContractList() {
  const masterData = useSelector((state) => state.MasterDataReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // filter component state
  let paramId;
  let editId;
  const [projNumber, setprojNumber] = useState(null);
  const [tableData, setTableData] = useState(null);

  const [filters1, setFilters1] = useState({
    id: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    contractNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
    contractSignOn: { value: null, matchMode: FilterMatchMode.CONTAINS },
    contractStartDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
    customer: { value: null, matchMode: FilterMatchMode.CONTAINS },
    activeProjects: { value: null, matchMode: FilterMatchMode.CONTAINS },
    country: { value: null, matchMode: FilterMatchMode.CONTAINS },
    office: { value: null, matchMode: FilterMatchMode.CONTAINS },
    business: { value: null, matchMode: FilterMatchMode.CONTAINS },
    businessSubType: { value: null, matchMode: FilterMatchMode.CONTAINS },
    customerName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    location: { value: null, matchMode: FilterMatchMode.CONTAINS },
    contract: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });

  const { TEXT_FIELD, AUTOCOMPLETE } = COMPONENTS;
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
      key: 'region',
      label: 'Region',
      placeholder: 'Region',
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
      key: 'businessSubType',
      label: 'Business Sub Type',
      placeholder: 'Business Sub Type',
      options: masterData?.contract
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'Status',
      label: 'Status',
      placeholder: 'Status',
      options: masterData?.projectStatus
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'customerName',
      label: 'Customer Name or ID',
      placeholder: 'Customer Name or ID'
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'location',
      label: 'Location',
      placeholder: 'Location'
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'contractOrProjectNumber',
      label: 'Contract or Project Number',
      placeholder: 'Contract or Project Number'
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'Salesman',
      label: 'Salesman',
      placeholder: 'Salesman'
    }
  ];
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
  const [colName, setColName] = useState([
    {
      id: 'id',
      header: 'ID',
      field: 'id',
      editorElement: 'textField'
    },
    {
      id: 'status',
      header: 'Status',
      field: 'status',
      editorElement: 'textField'
    },
    {
      id: 'contractNumber',
      header: 'Contract Number',
      field: 'contractNumber',
      editorElement: 'textField'
    },
    {
      id: 'contractSignOn',
      header: 'Contract Signed On',
      field: 'contractSignOn',
      editorElement: 'date'
    },
    {
      id: 'contractStartDate',
      header: 'Contract Start Date',
      field: 'contractStartDate',
      editorElement: 'date'
    },
    {
      id: 'customer',
      header: 'Customer',
      field: 'customer',
      editorElement: 'textField'
    },
    {
      id: 'activeProjects',
      header: 'Active Projects',
      field: 'activeProjects',
      editorElement: 'textField'
    }
  ]);

  const [expandColName, setExpandColName] = useState([
    {
      id: 'id',
      header: 'ID',
      field: 'id'
    },
    {
      id: 'status',
      header: 'Status',
      field: 'status'
    },
    {
      id: 'projectNumber',
      header: 'Project Number',
      field: 'projectNumber'
    },
    {
      id: 'projectStartDate',
      header: 'Project Start Date',
      field: 'projectStartDate'
    },
    {
      id: 'endDate',
      header: 'Project End Date',
      field: 'endDate'
    },
    {
      id: 'business',
      header: 'Business',
      field: 'business'
    },
    {
      id: 'location',
      header: 'Location',
      field: 'location'
    }
  ]);

  const globalFilters = [
    'id',
    'status',
    'contractNumber',
    'contractSignOn',
    'contractStartDate',
    'customer',
    'activeProjects'
  ];

  const navigate = useNavigate();

  const navigateToProjectCreation = (options) => {
    editId = options.project_number;
    navigate(`/project/edit/${options.id}`, { state: editId }, { replace: true });
  };
  // const handleError = useErrorHandler();
  const navigateOnButtonClick = (projNumber) => {
    try {
      console.log(projNumber);
      navigate(`/project/edit/${projNumber}`, { state: projNumber }, { replace: true });
    } catch (e) {
      // handleError(e);
    }
  };

  const navigateToContractEdition = (options) => {
    // console.log('calling', options);
    paramId = options.contractNumber;
    navigate(`/contract/edit/${options.id}`, { state: paramId }, { replace: true });
    console.log('paramId', paramId);
  };

  const deleteRowData = (options) => {
    const tempData = tableData.filter((td) => td.id !== options.id);
    setTableData(tempData);
  };

  const navigateToContractAddition = () => {
    navigate('/contract/add', { replace: true });
  };

  useEffect(() => {
    getContractData().then((data) => setTableData(data));
  }, []);

  const numericFields = ['id', 'contractNumber', 'contractSignOn', 'contractStartDate', 'status', 'activeProjects'];
  const numericFieldsExpandedData = ['id', 'status', 'project_number', 'project_start_date', 'end_date'];

  return (
    <Grid className="contract_list_main_cls">
      <Grid container spacing={3}>
        {/* Grid for heading section */}
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            {t('Contract List')}
          </Typography>
        </Grid>

        {/* Grid for open project and add contract section */}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label={t('Project Number')}
              size="small"
              value={projNumber}
              onChange={(e) => {
                setprojNumber(e.target.value);
                console.log('log', projNumber);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '1rem' }}
              size="small"
              onClick={() => navigateOnButtonClick(projNumber)}
            >
              {t('Open Project')}
            </Button>
          </Grid>
          <Button variant="contained" color="primary" size="small" onClick={() => navigateToContractAddition()}>
            {t('Add New Contract')}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
        </Grid>
        {/* Grid for filter section */}
        <Grid item xs={12}>
          <Filters
            components={FILTER_COMPONETS}
            apiUrl="dummyUrl"
            getFilterData={getFilterData}
            getFilterDataPayloadChange={getFilterDataPayloadChange}
          />
        </Grid>
        {/* Grid for all contract list */}
        <Grid item xs={12}>
          <DataTable
            data={tableData}
            columns={colName}
            expandedColumns={expandColName}
            filters1={filters1}
            globalFilters={globalFilters}
            onRowClick={navigateToContractEdition}
            onChildRowClick={navigateToProjectCreation}
            numericFields={numericFields}
            numericFieldsExpandedData={numericFieldsExpandedData}
            deleteRowData={deleteRowData}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContractList;
