import React, { useState } from 'react';
import './InvoiceList.scss';
import { Grid, Typography, TextField, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import InvoiceListingData from './InvoiceListingData.json';
import SimpleTable from '../../components/table/simpleTable';

function InvoiceList() {
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
  return (
    <div className="invoice_list_main_cls">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Invoice List
          </Typography>
        </Grid>
        {/* Filter section Start */}
        <Grid container spacing={3} style={{ marginTop: '0px', marginLeft: '10px' }}>
          <Grid item xs={12}>
            <Accordion style={{ boxShadow: 'none' }} fullWidth>
              <AccordionSummary
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}
                expandIcon={<ArrowRight />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h6">Filters</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Autocompletewidget grid container start */}
                <Grid Container spacing={3} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget options={countries} label="Country" disablePortal autoSelect size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget options={countries} label="Office" disablePortal autoSelect size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget options={countries} label="Salesmen" disablePortal autoSelect size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget options={countries} label="Servicemen" disablePortal autoSelect size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField fullWidth label="Customer" size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField fullWidth label="Proj.Inv.OnAc.No" size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <AutocompleteWidget options={countries} label="Status" disablePortal autoSelect size="small" />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <BasicDatePicker label="Date" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <BasicDatePicker label="Date" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <Button variant="contained" size="small">
                      Filter
                    </Button>
                  </Grid>
                </Grid>
                {/* Autocompletewidget grid container end */}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        {/* Filter section xs={12} end */}
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
