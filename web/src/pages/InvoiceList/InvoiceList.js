import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Button } from '@mui/material';
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
      InvoiceData.map((item) =>
        displayData.push({
          id: item.id,
          InvoiceNumber: item.InvoiceNumber,
          InvoiceDate: item.InvoiceDate,
          ProjectNumber: item.ProjectNumber,
          CustomerNo: item.CustomerNo,
          CustomerName: item.CustomerName,
          LocationName: item.LocationName,
          GrossAmt: item.GrossAmt,
          Discount: item.Discount,
          DiscountAmt: item.DiscountAmt,
          NetAmt: item.NetAmt,
          VatAmt: item.VatAmt,
          NetWVatAmt: item.NetWVatAmt
        })
      );
      if (displayData.length > 0) {
        setInvoiceData(displayData);
      }
      console.log('displayData....', displayData);
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
      field: 'InvoiceNumber',
      header: 'Invoice Number',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: true
    },
    {
      field: 'InvoiceDate',
      header: 'Invoice Date',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'ProjectNumber',
      header: 'Project Number',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'CustomerNo',
      header: 'Customer No.',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'CustomerName',
      header: 'Customer Name',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'LocationName',
      header: 'Location Name',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'GrossAmt',
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
      field: 'DiscountAmt',
      header: 'Discount AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'NetAmt',
      header: 'NET AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'VatAmt',
      header: 'VAT AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: false
    },
    {
      field: 'NetWVatAmt',
      header: 'Net w VAT AMT',
      editorElement: null,
      sortable: true,
      filter: true,
      isFrozen: true
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
    'NONE'
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
