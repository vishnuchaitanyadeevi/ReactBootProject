import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './InvoiceList.scss';
import { Grid, Typography, TextField, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import InvoiceListingData from './InvoiceListingData.json';
import Filters from '../../components/Filter/filter';
import { COMPONENTS } from '../../utils/constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../components/ServiceBoard/data';
import { POST_OFFICE } from '../../redux/constants';
import SimpleTable from '../../components/table/simpleTable';

function InvoiceList() {
  const masterData = useSelector((state) => state.MasterDataReducer);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState(InvoiceListingData);
  const [editingRows, setEditingRows] = useState({});
  const numericFields = [
    'id',
    'invoice_number',
    'invoice_date',
    'project_number',
    'customer_no',
    'gross_amt',
    'discount_%',
    'discount_amt',
    'net_amt',
    'vat_amt',
    'net_w_vat_amt'
  ];
  const countries = [
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
    { label: 'Qatar', value: 'Qatar' },
    { label: 'Oman', value: 'Oman' },
    { label: 'Kuwait', value: 'Kuwait' },
    { label: 'Iraq', value: 'Iraq' },
    { label: 'Bahrain', value: 'Bahrain' }
  ];
  const columnDataForInvoice = [
    {
      field: 'id',
      header: 'ID',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: true
    },
    {
      field: 'invoice_number',
      header: 'Invoice Number',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: true
    },
    {
      field: 'invoice_date',
      header: 'Invoice Date',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'project_number',
      header: 'Project Number',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'customer_no',
      header: 'Customer No.',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'customer_name',
      header: 'Customer Name',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'location_name',
      header: 'Location Name',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'gross_amt',
      header: 'Gross AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'discount_%',
      header: 'Discount %',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'discount_amt',
      header: 'Discount AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'net_amt',
      header: 'NET AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'vat_amt',
      header: 'VAT AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'net_w_vat_amt',
      header: 'Net w VAT AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: true
    }
  ];
  const [filters1, setFilters1] = useState({
    country: { value: null, matchMode: FilterMatchMode.CONTAINS },
    office: { value: null, matchMode: FilterMatchMode.CONTAINS },
    salesman: { value: null, matchMode: FilterMatchMode.CONTAINS },
    serviceman: { value: null, matchMode: FilterMatchMode.CONTAINS },
    customer: { value: null, matchMode: FilterMatchMode.CONTAINS },
    projinvonacno: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  const { TEXT_FIELD, AUTOCOMPLETE, DATEPICKER } = COMPONENTS;
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
      label: 'Office',
      placeholder: 'Office',
      options: masterData?.office
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'salesman',
      label: 'Salesman',
      placeholder: 'Salesman',
      options: masterData?.salesman
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'serviceman',
      label: 'Serviceman',
      placeholder: 'Serviceman',
      options: masterData?.serviceman
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'customer',
      label: 'Customer Name',
      placeholder: 'Customer Name'
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'projinvonacno',
      label: 'Proj. Inv. OnAc. No.',
      placeholder: 'Proj. Inv. OnAc. No.'
    },
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'status',
      label: 'Status',
      placeholder: 'Status',
      options: masterData?.status
    },
    {
      control: DATEPICKER,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'start'
    },
    {
      control: DATEPICKER,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'end'
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
  const headCellsType = [
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE',
    'NONE'
  ];

  return (
    <div className="invoice_list_main_cls">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Invoice List
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Filters
            components={FILTER_COMPONETS}
            apiUrl="dummyUrl"
            getFilterData={getFilterData}
            getFilterDataPayloadChange={getFilterDataPayloadChange}
          />
        </Grid>
      </Grid>
      {/* Grid for simple table */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12}>
          <SimpleTable
            rowData={InvoiceListingData}
            headerData={columnDataForInvoice}
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
            numericFields={numericFields}
            showIssueColumn
            issueheader="Issue"
            issuetype="button"
            issuetitle="Issue"
            showSaveChangesColumn
            saveChangestype="button"
            saveChangestitle="Save Changes"
            showEditColumn
            edittype="button"
            edittitle="Edit"
            showPrintColumn
            printtype="button"
            printtitle="Print"
            trialColumn
            headCellsType={headCellsType}
          />
        </Grid>
      </Grid>
      {/* Grid for bottom Buttons */}
      <Grid
        container
        spacing={2}
        style={{ display: 'flex', alignItems: 'center', marginTop: '1rem', marginLeft: '-9px' }}
      >
        <Button variant="contained" size="small" style={{ margin: '0.5rem' }}>
          Print all on page
        </Button>
        <Button variant="contained" size="small" style={{ margin: '0.5rem' }}>
          Print all on page UAE
        </Button>
        <Button variant="contained" size="small" style={{ margin: '0.5rem' }}>
          Issue all on page
        </Button>
        <Button variant="contained" size="small" style={{ margin: '0.5rem' }}>
          Export to Excel
        </Button>
      </Grid>
      {/* Container end */}
    </div>
  );
}

export default InvoiceList;
