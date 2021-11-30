import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Divider } from '@mui/material';
import { FilterMatchMode } from 'primereact/api';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
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
    _filters1.salesman.value = salesman;
    setFilters1(_filters1);
  };

  const clearFilter1 = () => {
    setSalesman('');
    const _filters1 = { ...filters1 };
    _filters1.country.value = null;
    _filters1.office.value = null;
    _filters1.business.value = null;
    _filters1.businessSubType.value = null;
    _filters1.status.value = null;
    _filters1.customerName.value = null;
    _filters1.location.value = null;
    _filters1.contract.value = null;
    _filters1.salesman.value = null;
    setFilters1(_filters1);
  };

  const [filters1, setFilters1] = useState({
    country: { value: null, matchMode: FilterMatchMode.CONTAINS },
    office: { value: null, matchMode: FilterMatchMode.CONTAINS },
    business: { value: null, matchMode: FilterMatchMode.CONTAINS },
    businessSubType: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    customerName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    location: { value: null, matchMode: FilterMatchMode.CONTAINS },
    contract: { value: null, matchMode: FilterMatchMode.CONTAINS },
    salesman: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  const handleChangeFilter = (key, val) => setFilters1({ ...filters1, [key]: val });
  const [colName, setColName] = useState([
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
      id: 'contract_number',
      header: 'Contract Number',
      field: 'contract_number'
    },
    {
      id: 'contract_sign_on',
      header: 'Contract Sign On',
      field: 'contract_sign_on'
    },
    {
      id: 'contract_start_date',
      header: 'Contract Start Date',
      field: 'contract_start_date'
    },
    {
      id: 'customer',
      header: 'Customer',
      field: 'customer'
    },
    {
      id: 'salesman',
      header: 'Salesman',
      field: 'salesman'
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
      header: 'End Date',
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
            <Button variant="contained" color="primary" style={{ marginLeft: '1rem' }} size="small">
              Open Project
            </Button>
          </Grid>
          <Button variant="contained" color="primary" size="small">
            Add New Contract
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
        </Grid>
        {/* Grid for filter section */}
        <Grid item xs={6} sm={2}>
          <AutocompleteWidget options={projectLocation} label="Country" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={2}>
          <AutocompleteWidget options={projectLocation} label="Office" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={2}>
          <AutocompleteWidget options={projectLocation} label="Business" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={2}>
          <AutocompleteWidget
            options={projectLocation}
            label="Business sub type"
            disablePortal
            autoSelect
            size="small"
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <AutocompleteWidget options={projectLocation} label="Status" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            label="Customer name or ID"
            size="small"
            onChange={(e) => handleChangeFilter('customer', e.target.value)}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField fullWidth label="Location" size="small" />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField fullWidth label="Contract or project" size="small" />
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
        {/* Grid for all contract list */}
        <Grid item xs={12}>
          <DataTable data={contractData} columns={colName} expandedColumns={expandColName} filters1={filters1} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContractList;
