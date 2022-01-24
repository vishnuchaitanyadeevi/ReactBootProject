import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import Filters from '../../components/Filter/filter';
import { COMPONENTS } from '../../utils/constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../components/ServiceBoard/data';
import { POST_OFFICE } from '../../redux/constants';
import SimpleTable from '../../components/table/simpleTable';
import { InvoiceData } from './Data';
import './InvoiceList.scss';

function InvoiceList() {
  const masterData = useSelector((state) => state.MasterDataReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [invoiceData, setInvoiceData] = useState(null);
  const [editingRows, setEditingRows] = useState({});
  const numericFields = [
    'id',
    'InvoiceNumber',
    'InvoiceDate',
    'ProjectNumber',
    'CustomerNo',
    'GrossAmt',
    'discount_%',
    'DiscountAmt',
    'NetAmt',
    'VatAmt',
    'NetWVatAmt'
  ];
  useEffect(() => {
    getInvoiceData();
  }, []);
  const getInvoiceData = () => {
    if (InvoiceData) {
      const displayData = [];
      InvoiceData.map((item) => {
        const {
          InvoiceNumber,
          InvoiceDate,
          ProjectNumber,
          CustomerNo,
          CustomerName,
          LocationName,
          GrossAmt,
          Discount,
          DiscountAmt,
          NetAmt,
          VatAmt,
          NetWVatAmt,
          id
        } = item;
        return displayData.push({
          InvoiceNumber,
          InvoiceDate,
          ProjectNumber,
          CustomerNo,
          CustomerName,
          LocationName,
          GrossAmt,
          Discount,
          DiscountAmt,
          NetAmt,
          VatAmt,
          NetWVatAmt,
          id
        });
      });
      if (displayData.length > 0) {
        setInvoiceData(displayData);
      }
    }
  };
  const countries = [
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
    { label: 'Qatar', value: 'Qatar' },
    { label: 'Oman', value: 'Oman' },
    { label: 'Kuwait', value: 'Kuwait' },
    { label: 'Iraq', value: 'Iraq' },
    { label: 'Bahrain', value: 'Bahrain' }
  ];

  const handleIssue = (val) => console.log('IssueData...', val);
  const handleSaveChanges = (val) => console.log('SaveChanges...', val);
  const handleEdit = (val) => console.log('EditData...', val);
  const handlePrint = (val) => console.log('PrintData...', val);

  const columnDataForInvoice = [
    { field: 'id', header: 'ID', sortable: true, filter: true, isFrozen: true },
    { field: 'InvoiceNumber', header: 'Invoice Number', sortable: true, filter: true, isFrozen: true },
    { field: 'InvoiceDate', header: 'Invoice Date', sortable: true, filter: true, isFrozen: false },
    { field: 'ProjectNumber', header: 'Project Number', sortable: true, filter: true, isFrozen: false },
    { field: 'CustomerNo', header: 'Customer No.', sortable: true, filter: true, isFrozen: false },
    { field: 'CustomerName', header: 'Customer Name', sortable: true, filter: true, isFrozen: false },
    { field: 'LocationName', header: 'Location Name', sortable: true, filter: true, isFrozen: false },
    { field: 'GrossAmt', header: 'Gross AMT', sortable: true, filter: true, isFrozen: false },
    { field: 'discount_%', header: 'Discount %', sortable: true, filter: true, isFrozen: false },
    { field: 'DiscountAmt', header: 'Discount AMT', sortable: true, filter: true, isFrozen: false },
    { field: 'NetAmt', header: 'NET AMT', sortable: true, filter: true, isFrozen: false },
    { field: 'VatAmt', header: 'VAT AMT', sortable: true, filter: true, isFrozen: false },
    { field: 'NetWVatAmt', header: 'Net w VAT AMT', sortable: true, filter: true, isFrozen: true },
    {
      field: 'issue',
      header: 'Issue',
      icon: <ErrorIcon style={{ cursor: 'pointer', textAlign: 'center' }} />,
      onClick: handleIssue
    },
    {
      field: 'saveChanges',
      header: 'Save Changes',
      icon: <SaveIcon style={{ cursor: 'pointer', textAlign: 'center' }} />,
      onClick: handleSaveChanges
    },
    {
      field: 'edit',
      header: 'Edit',
      icon: <EditIcon style={{ cursor: 'pointer', textAlign: 'center' }} />,
      onClick: handleEdit
    },
    {
      field: 'print',
      header: 'Print',
      icon: <PrintIcon style={{ cursor: 'pointer', textAlign: 'center' }} />,
      onClick: handlePrint
    }
  ];
  const { country, office, salesman, serviceman, status } = masterData;
  const { TEXT_FIELD, AUTOCOMPLETE, DATEPICKER } = COMPONENTS;
  const FILTER_COMPONETS = [
    {
      control: AUTOCOMPLETE,
      key: 'country',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'invoiceList.country',
      placeholder: 'invoiceList.country',
      columnWidth: '2',
      options: country
    },
    {
      control: AUTOCOMPLETE,
      key: 'office',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'invoiceList.office',
      placeholder: 'invoiceList.office',
      columnWidth: '2',
      options: office
    },
    {
      control: AUTOCOMPLETE,
      key: 'salesman',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'invoiceList.salesman',
      placeholder: 'invoiceList.salesman',
      columnWidth: '2',
      options: salesman
    },
    {
      control: AUTOCOMPLETE,
      key: 'serviceman',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'invoiceList.serviceman',
      placeholder: 'invoiceList.serviceman',
      columnWidth: '2',
      options: serviceman
    },
    {
      control: TEXT_FIELD,
      key: 'customer',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'invoiceList.customer',
      placeholder: 'invoiceList.customer',
      columnWidth: '2'
    },
    {
      control: TEXT_FIELD,
      key: 'projinvonacno',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'invoiceList.projinvonacno',
      placeholder: 'invoiceList.projinvonacno',
      columnWidth: '2'
    },
    {
      control: AUTOCOMPLETE,
      key: 'status',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'invoiceList.status',
      placeholder: 'invoiceList.status',
      columnWidth: '2',
      options: status
    },
    {
      control: DATEPICKER,
      key: 'date',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'addCallout.date',
      inputFormat: 'dd-MM-yyyy',
      views: ['year', 'month', 'day'],
      columnWidth: '2'
    },
    {
      control: DATEPICKER,
      key: 'date',
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      label: 'addCallout.date',
      inputFormat: 'dd-MM-yyyy',
      views: ['year', 'month', 'day'],
      columnWidth: '2'
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
    'NONE',
    'ICON',
    'ICON',
    'ICON',
    'ICON'
  ];

  return (
    <div className="invoice_list_main_cls">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {t('Invoice List')}
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
            rowData={InvoiceData}
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
