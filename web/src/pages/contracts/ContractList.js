import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { FilterMatchMode } from 'primereact/api';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../components/DataTable';
import contractData from '../../utils/Contract-List-Data.json';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import './ContractList.scss';

function ContractList() {
  // filter component state
  const [country, setCountry] = useState(null);
  const [office, setOffice] = useState(null);
  const [business, setBusiness] = useState(null);
  const [businessSubType, setBusinessSubType] = useState(null);
  const [status, setStatus] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [location, setLocation] = useState(null);
  const [contract, setContract] = useState(null);
  const [salesman, setSalesman] = useState(null);
  const [showFilter, setShowFilter] = useState(true);
  const [activeProjects, setActiveProjects] = useState(null);

  const onStockFilterChange = () => {
    const _filters1 = { ...filters1 };
    _filters1.country.value = country;
    _filters1.office.value = office;
    _filters1.business.value = business;
    _filters1.businessSubType.value = businessSubType;
    _filters1.status.value = status;
    _filters1.customerName.value = customerName;
    _filters1.location.value = location;
    _filters1.contract.value = contract;
    _filters1.activeProjects.value = activeProjects;
    setFilters1(_filters1);
  };

  const clearFilter1 = () => {
    setActiveProjects('');
    const _filters1 = { ...filters1 };
    _filters1.country.value = null;
    _filters1.office.value = null;
    _filters1.business.value = null;
    _filters1.businessSubType.value = null;
    _filters1.status.value = null;
    _filters1.customerName.value = null;
    _filters1.location.value = null;
    _filters1.contract.value = null;
    _filters1.activeProjects.value = null;
    setFilters1(_filters1);
  };

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
  const handleChangeFilter = (key, val) => setFilters1({ ...filters1, [key]: val });
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
      id: 'project_number',
      header: 'Project Number',
      field: 'project_number'
    },
    {
      id: 'project_start_date',
      header: 'Project Start Date',
      field: 'project_start_date'
    },
    {
      id: 'end_date',
      header: 'Project End Date',
      field: 'end_date'
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

  const projectLocation = [
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
    { label: 'Qatar', value: 'Qatar' },
    { label: 'Oman', value: 'Oman' },
    { label: 'Kuwait', value: 'Kuwait' },
    { label: 'Iraq', value: 'Iraq' },
    { label: 'Bahrain', value: 'Bahrain' }
  ];
  const globalFilters = [
    'id',
    'status',
    'contractNumber',
    'contractSignOn',
    'contractStartDate',
    'customer',
    'activeProjects'
  ];
  const statusData = [
    { label: 'Success', value: 'Success' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Running', value: 'Running' }
  ];

  const navigate = useNavigate();

  const navigateToProjectCreation = () => {
    navigate('/project/edit/1', { replace: true });
  };

  const navigateToContractEdition = (options) => {
    console.log('calling', options);
    navigate('/contract/edit/1', { replace: true });
  };

  const navigateToContractAddition = () => {
    navigate('/contract/add', { replace: true });
  };
  const numericFields = ['id', 'contractNumber', 'contractSignOn', 'contractStartDate', 'status', 'activeProjects'];
  const numericFieldsExpandedData = ['id', 'status', 'project_number', 'project_start_date', 'end_date'];

  return (
    <Grid className="contract_list_main_cls">
      <Grid container spacing={3}>
        {/* Grid for heading section */}
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Contract List
          </Typography>
        </Grid>

        {/* Grid for open project and add contract section */}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid style={{ display: 'flex', alignItems: 'center' }}>
            <TextField label="Project Number" size="small" />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '1rem' }}
              size="small"
              onClick={navigateToProjectCreation}
            >
              Open Project
            </Button>
          </Grid>
          <Button variant="contained" color="primary" size="small" onClick={navigateToContractAddition}>
            Add New Contract
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
        </Grid>
        {/* Grid for filter section */}
        <Grid
          container
          spacing={3}
          hidden={!(showFilter === 'panel1' || showFilter === true)}
          style={{ marginTop: '0px' }}
        >
          <Grid item xs={12}>
            <Accordion style={{ boxShadow: 'none' }} fullWidth>
              <AccordionSummary
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}
                expandIcon={<ArrowRight />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h6">Filter</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget
                      options={projectLocation}
                      label="Country"
                      disablePortal
                      autoSelect
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget
                      options={projectLocation}
                      label="Region"
                      disablePortal
                      autoSelect
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget
                      options={projectLocation}
                      label="Business"
                      disablePortal
                      autoSelect
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget
                      options={projectLocation}
                      label="Business Sub Type"
                      disablePortal
                      autoSelect
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget
                      options={statusData}
                      label="Status"
                      disablePortal
                      autoSelect
                      size="small"
                      onChange={(event, newValue) => setStatus(newValue?.value)}
                      defaultValue={status}
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField
                      fullWidth
                      label="Customer Name or ID"
                      size="small"
                      onChange={(e) => handleChangeFilter('customer', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField fullWidth label="Location" size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField fullWidth label="Contract or Project Number" size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField
                      onChange={(e) => setSalesman(e.target.value)}
                      fullWidth
                      label="Salesman"
                      size="small"
                      value={salesman}
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Button onClick={onStockFilterChange} variant="contained" size="small" startIcon={<SearchIcon />}>
                      Filter
                    </Button>
                    <Button
                      onClick={clearFilter1}
                      style={{ marginLeft: '0.5rem' }}
                      variant="contained"
                      size="small"
                      startIcon={<CloseIcon />}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        {/* Grid for all contract list */}
        <Grid item xs={12}>
          <DataTable
            data={contractData}
            columns={colName}
            expandedColumns={expandColName}
            filters1={filters1}
            globalFilters={globalFilters}
            onRowClick={navigateToContractEdition}
            onChildRowClick={navigateToProjectCreation}
            numericFields={numericFields}
            numericFieldsExpandedData={numericFieldsExpandedData}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContractList;
