import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../Styles/app.scss';

function ContractList({ data, columns, expandedColumns, filters1 }) {
  const [tableData, setTableData] = useState(data);
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const textEditor = (options) => (
    <InputText
      type="text"
      value={options.value}
      onChange={(e) => options.editorCallback(e.target.value)}
      style={{ minWidth: '12rem' }}
    />
  );
  const header = (
    <div className="datatable-crud-demo">
      <div className="table-header">
        <h4>CONTRACT DETAILS</h4>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            // value={globalFilterValue}
            // onChange={onGlobalFilterChange}
            placeholder="Global Search"
            onInput={(e) => setGlobalFilter(e.target.value)}
          />
        </span>
      </div>
    </div>
  );

  const rowExpansionTemplate = (data) => (
    <div className="orders-subtable">
      <DataTable
        value={data.projects}
        responsiveLayout="scroll"
        showGridlines
        resizableColumns
        columnResizeMode="expand"
        size="small"
        paginator
        rows={10}
        scrollable
        scrollHeight="400px"
      >
        {expandedColumns && expandedColumns.map((col) => <Column field={col.field} header={col.header} sortable />)}
      </DataTable>
    </div>
  );
  return (
    <div className="datatable-rowexpansion-demo">
      <div className="card">
        <DataTable
          value={tableData}
          expandedRows={expandedRows}
          showGridlines
          responsiveLayout="scroll"
          resizableColumns
          columnResizeMode="expand"
          size="small"
          paginator
          rows={10}
          onRowToggle={(e) => setExpandedRows(e.data)}
          // onRowExpand={onRowExpand}
          // onRowCollapse={onRowCollapse}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          scrollHeight="400px"
          header={header}
          globalFilter={globalFilter}
          globalFilterFields={[
            'id',
            'status',
            'contract_number',
            'contract_sign_on',
            'contract_start_date',
            'customer',
            'salesman'
          ]}
          filters={filters1}
        >
          <Column expander style={{ width: '3em' }} />
          {columns && columns.map((col) => <Column field={col.field} header={col.header} sortable />)}
        </DataTable>
      </div>
    </div>
  );
}

export default ContractList;
