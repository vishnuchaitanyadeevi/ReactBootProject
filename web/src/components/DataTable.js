import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Helmet } from 'react-helmet';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Tooltip from '@mui/material/Tooltip';
import useSettings from '../hooks/useSettings';
import AutocompleteWidget from './Autocomplete/autocompletWidget';
import BasicDatePicker from './pickers/BasicDatePicker';
import '../Styles/app.scss';

function ContractList({
  rowData,
  columns,
  expandedColumns,
  filters1,
  globalFilters,
  onRowClick,
  onChildRowClick,
  numericFields,
  numericFieldsExpandedData,
  deleteRowData,
  headCellsType,
  headCellsExapndedType
}) {
  const { themeMode, onChangeMode } = useSettings();
  const [tableData, setTableData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [tempdata, setTempdata] = useState([]);

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

  const handleChangeEditor = (editorFlag, options) => {
    switch (editorFlag) {
      case 'textField':
        return (
          <Tooltip title={options.value}>
            <TextField type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />
          </Tooltip>
        );
      case 'date':
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
      default:
        return undefined;
    }
  };
  const header = (
    <div className="datatable-crud-demo">
      <div className="table-header">
        <div />
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

  // handleChange rowDate
  const handleChangeDate = (newValue, data, key) => {
    // find id and index from json and update that value
    // Find index of specific object using findIndex method.
    if (data && newValue) {
      const objIndex = rowData.findIndex((obj) => obj.id === data.id);
      console.log('Before update...', rowData[objIndex]);
      rowData[objIndex][key] = newValue;
      console.log('After update...', rowData[objIndex]);
      console.log('mockData...', rowData);
      // console.log('Expanded', rowData.projects);
      setIsUpdate(true);
    }
  };

  // HandleChange body
  const handleChangeBody = (options, idx) => {
    const key = Object.keys(options)[idx];
    const newVal = { key, value: options[key] };
    switch (headCellsType[idx]) {
      case 'BUTTON':
        return <Button variant="contained">{newVal.value}</Button>;
      case 'NONE':
        return <Typography style={{ fontSize: '13px' }}>{newVal.value}</Typography>;
      case 'LINK':
        return (
          <Typography style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', color: 'blue' }}>
            {newVal.value}
          </Typography>
        );
      case 'DATE':
        return (
          <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <BasicDatePicker
              label="Date"
              inputFormat="dd-MM-yyyy"
              views={['year', 'month', 'day']}
              value={newVal.value}
              getSelectedDate={(dt) => console.log('bodydate..', dt)}
              getIsoDate={(e) => handleChangeDate(e, options, key)}
              size="large"
            />
          </div>
        );
      default:
        return undefined;
    }
  };

  const handleExpandedChangeDate = (newValue, data, key) => {
    // find id and index from json and update that value
    // Find index of specific object using findIndex method.
    if (data && newValue) {
      const objIndex = tempdata.findIndex((obj) => obj.id === data.id);
      console.log('Before update...', tempdata[objIndex]);
      tempdata[objIndex][key] = newValue;
      console.log('After update...', tempdata[objIndex]);
      console.log('mockData...', tempdata);
      // console.log('Expanded', rowData.projects);
      setIsUpdate(true);
    }
  };
  // ExpandedChangeBody
  const handleChangeExpandedBody = (options, idx) => {
    const key = Object.keys(options)[idx];
    const newVal = { key, value: options[key] };
    switch (headCellsExapndedType[idx]) {
      case 'BUTTON':
        return <Button variant="contained">{newVal.value}</Button>;
      case 'NONE':
        return <Typography style={{ fontSize: '13px' }}>{newVal.value}</Typography>;
      case 'LINK':
        return (
          <Typography style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', color: 'blue' }}>
            {newVal.value}
          </Typography>
        );
      case 'DATE':
        return (
          <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <BasicDatePicker
              label="Date"
              inputFormat="dd-MM-yyyy"
              views={['year', 'month', 'day']}
              value={newVal.value}
              getSelectedDate={(dt) => console.log('date..', dt)}
              getIsoDate={(e) => handleExpandedChangeDate(e, options, key)}
              size="large"
            />
          </div>
        );
      default:
        return undefined;
    }
  };

  useEffect(() => {
    if (isUpdate) {
      console.log('calling..date change');
      setIsUpdate(false);
    }
  }, [isUpdate]);
  const editIcon = (rowData) => <ModeEditOutlinedIcon onClick={() => onRowClick(rowData)} />;
  const deleteIcon = (rowData) => <DeleteIcon onClick={() => deleteRowData(rowData)} />;
  const editIconExpanded = (rowData) => <ModeEditOutlinedIcon onClick={() => onChildRowClick(rowData)} />;
  const rowExpansionTemplate = (data) => {
    if (data) {
      setTempdata(data.projects);
    }
    return (
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
          filterDisplay="menu"
        >
          {expandedColumns &&
            expandedColumns.map((col, idx) => (
              <Column
                field={col.field}
                header={col.header}
                sortable
                filter
                style={{ justifyContent: `${numericFieldsExpandedData.includes(col.field) ? 'center' : ''}` }}
                body={(options) => handleChangeExpandedBody(options, idx)}
              />
            ))}
          <Column
            columnKey="edit"
            body={editIconExpanded}
            style={{
              minWidth: '6rem',
              width: '6rem',
              paddingBottom: '0.1rem',
              paddingTop: '0.1rem',
              justifyContent: 'center'
            }}
          />
        </DataTable>
      </div>
    );
  };
  return (
    <div className="datatable-rowexpansion-demo">
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://unpkg.com/primereact/resources/themes/lara-${themeMode}-indigo/theme.css`}
        />
      </Helmet>
      <div className="card">
        <DataTable
          editMode="row"
          value={rowData}
          expandedRows={expandedRows}
          showGridlines
          responsiveLayout="scroll"
          size="small"
          paginator
          rows={10}
          filterDisplay="menu"
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          // onRowClick={onRowClick}
          dataKey="id"
          scrollHeight="400px"
          header={header}
          globalFilter={globalFilter}
          globalFilterFields={globalFilters}
          // filters={filters1}
          onRowEditComplete={onRowEditComplete}
          reorderableColumns
          stripedRows
          rowsPerPageOptions={[10, 20, 50, 100]}
          selection={selected}
          onSelectionChange={(e) => setSelected(e.value)}
          resizableColumns
        >
          <Column expander style={{ minWidth: '1rem', textAlign: 'center' }} />
          {columns &&
            columns.map((col, idx) => (
              <Column
                field={col.field}
                header={col.header}
                sortable
                editor={(options) => handleChangeEditor(col.editorElement, options)}
                columnKey={col.id}
                filter
                filterType="text"
                style={{ textAlign: `${numericFields && numericFields.includes(col.field) ? 'center' : ''}` }}
                className={numericFields && numericFields.includes(col.field) ? 'd-data-cls' : ''}
                body={(options) => handleChangeBody(options, idx)}
              />
            ))}
          <Column
            columnKey="edit"
            body={editIcon}
            style={{
              minWidth: '6rem',
              width: '6rem',
              paddingBottom: '0.1rem',
              paddingTop: '0.1rem',
              textAlign: 'center'
            }}
          />
          <Column
            columnKey="delete"
            body={deleteIcon}
            style={{
              minWidth: '6rem',
              width: '6rem',
              paddingBottom: '0.1rem',
              paddingTop: '0.1rem',
              textAlign: 'center'
            }}
          />
        </DataTable>
      </div>
    </div>
  );
}

export default ContractList;
