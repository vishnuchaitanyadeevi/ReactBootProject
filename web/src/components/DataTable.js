import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import AutocompleteWidget from './Autocomplete/autocompletWidget';
import BasicDatePicker from './pickers/BasicDatePicker';
import '../Styles/app.scss';

function ContractList({
  data,
  columns,
  expandedColumns,
  filters1,
  globalFilters,
  onRowClick,
  onChildRowClick,
  numericFields,
  numericFieldsExpandedData
}) {
  const [tableData, setTableData] = useState(data);
  const [selected, setSelected] = useState(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const onRowEditComplete = (e) => {
    const _tableData = [...tableData];
    const { newData, index } = e;
    _tableData[index] = newData;
    setTableData(_tableData);
  };
  const textEditor = (options) => (
    <InputText
      type="text"
      value={options.value}
      onChange={(e) => options.editorCallback(e.target.value)}
      style={{ fontSize: '0.8rem' }}
    />
  );
  const statusData = [
    { label: 'Success', value: 'Success' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Running', value: 'Running' }
  ];
  const handleChangeEditor = (options) => {
    switch (options?.field) {
      case 'id':
        return <TextField type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
      case 'status':
        return <TextField type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
      case 'contractNumber':
        return <TextField type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
      case 'contractSignOn':
        return (
          <BasicDatePicker
            label="Contract Signed On"
            inputFormat="dd-MM-yyyy"
            views={['year', 'month', 'day']}
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            size="large"
          />
        );
      case 'contractStartDate':
        return (
          <BasicDatePicker
            label="Contract Start Date"
            inputFormat="dd-MM-yyyy"
            views={['year', 'month', 'day']}
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            size="large"
          />
        );
      case 'customer':
        return <TextField type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
      case 'salesman':
        return <TextField type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
      default:
        return undefined;
    }
  };
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
        onRowClick={onChildRowClick}
        filterDisplay="row"
      >
        {expandedColumns &&
          expandedColumns.map((col) => (
            <Column
              field={col.field}
              header={col.header}
              sortable
              filter
              style={{ justifyContent: `${numericFieldsExpandedData.includes(col.field) ? 'center' : ''}` }}
            />
          ))}
      </DataTable>
    </div>
  );
  return (
    <div className="datatable-rowexpansion-demo">
      <div className="card">
        <DataTable
          editMode="row"
          value={tableData}
          expandedRows={expandedRows}
          showGridlines
          responsiveLayout="scroll"
          columnResizeMode="expand"
          size="small"
          paginator
          rows={10}
          filterDisplay="row"
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          onRowClick={onRowClick}
          dataKey="id"
          scrollHeight="400px"
          header={header}
          globalFilter={globalFilter}
          globalFilterFields={globalFilters}
          filters={filters1}
          onRowEditComplete={onRowEditComplete}
          reorderableColumns
          stripedRows
          rowsPerPageOptions={[10, 20, 50, 100]}
          selection={selected}
          onSelectionChange={(e) => setSelected(e.value)}
        >
          <Column expander style={{ width: '3em' }} />
          {columns &&
            columns.map((col) => (
              <Column
                field={col.field}
                header={col.header}
                sortable
                editor={(options) => handleChangeEditor(options)}
                columnKey={col.id}
                filter
                filterType="text"
                style={{
                  textAlign: `${numericFields.includes(col.field) ? 'center' : ''}`,
                  minWidth: '12rem'
                }}
              />
            ))}
          <Column
            columnKey="edit"
            rowEditor
            headerstyle={{ width: '10%', minWidth: '8rem' }}
            bodyStyle={{ textAlign: 'center' }}
            style={{
              minWidth: '5rem',
              maxWidth: '5rem',
              paddingBottom: '0.1rem',
              paddingTop: '0.1rem'
            }}
            reorderable={false}
          />
        </DataTable>
      </div>
    </div>
  );
}

export default ContractList;
