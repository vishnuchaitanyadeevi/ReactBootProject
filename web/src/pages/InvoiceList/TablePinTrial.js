import React, { useState } from 'react';
import './InvoiceList.scss';
import { Grid, Typography } from '@mui/material';
import { Column } from 'primereact/column';
import DataTable from '../../components/DataTable';
import SimpleTable from '../../components/table/simpleTable';
import { InvoiceData } from './Data';

function TablePinTrial() {
  const [editingRows, setEditingRows] = useState({});
  const columnDataForInvoice = [
    {
      field: 'id',
      header: 'ID',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'invoice_number',
      header: 'Invoice Number',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'invoice_date',
      header: 'Invoice Date',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'project_number',
      header: 'Project Number',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'customer_no',
      header: 'Customer No.',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'customer_name',
      header: 'Customer Name',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'location_name',
      header: 'Location Name',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'gross_amt',
      header: 'Gross AMT',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'discount_%',
      header: 'Discount %',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'discount_amt',
      header: 'Discount AMT',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'net_amt',
      header: 'NET AMT',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'vat_amt',
      header: 'VAT AMT',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    },
    {
      field: 'net_w_vat_amt',
      header: 'Net w VAT AMT',
      editorElement: null,
      style: { width: '10%' },
      sortable: true,
      filter: true
    }
  ];
  return (
    <div className="invoice_list_main_cls">
      <Grid container>
        <Grid item xs={12}>
          <h1>TablePinTrial</h1>
        </Grid>
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
            trialColumn
            printtype="button"
            printtitle="Print"
          />
          {/* <DataTable data={InvoiceListingData} columns={columnDataForInvoice}>
            <Column field="id" header="ID" style={{ width: '200px' }} />
          </DataTable> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default TablePinTrial;
