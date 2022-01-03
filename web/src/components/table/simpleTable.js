import React, { Fragment, useState, useCallback } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Helmet } from 'react-helmet';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import Checkbox from '@mui/material/Checkbox';
import { FilterMatchMode } from 'primereact/api';
import useSettings from '../../hooks/useSettings';
import BasicDatePicker from '../pickers/BasicDatePicker';
// import ngPrimeGrid from '../ngPrimeGrid';
import jsonData from '../../utils/project-table-data.json';
import '../../Styles/app.scss';

export default function SimpleTable({
  rowData,
  headerData,
  editOption,
  showActionColumn,
  showIssueColumn,
  issuetype,
  issuetitle,
  issueheader,
  showSaveChangesColumn,
  saveChangestype,
  saveChangestitle,
  showEditColumn,
  edittype,
  edittitle,
  showPrintColumn,
  printtype,
  printtitle,
  type,
  title,
  btnLabel,
  numericFields,
  headCellsType,
  ...other
}) {
  const { themeMode, onChangeMode } = useSettings();
  const [tableData, setTableData] = useState(rowData);
  const [editingRows, setEditingRows] = useState({});
  const [filterState, setFilterState] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const onRowEditChange = (e) => {
    setEditingRows(e.data);
  };

  const onRowEditComplete = (e) => {
    const _tableData = [...tableData];
    const { newData, index } = e;
    _tableData[index] = newData;
    setTableData(_tableData);
  };
  const [globalFilter, setGlobalFilter] = useState(null);

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

  const setActiveRowIndex = (index) => {
    const editingRow = { ...editingRows, ...{ [`${tableData[index].id}`]: true } };
    setEditingRows(editingRow);
  };

  const textEditor = (options) => (
    <InputText
      type="text"
      value={options.value}
      onChange={(e) => options.editorCallback(e.target.value)}
      style={{ minWidth: '12rem' }}
    />
  );

  const switchEditor = (editorFlag, options) => {
    switch (editorFlag) {
      case 'text':
        return (
          <InputText
            type="text"
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            style={{ minWidth: '12rem' }}
          />
        );
      case 'checkbox':
        return <Checkbox checked={options.value} onChange={(e) => options.editorCallback(e.target.checked)} />;
      default:
        return (
          <InputText
            type="text"
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            style={{ minWidth: '12rem' }}
          />
        );
    }
  };

  const addNewProject = () => {
    const currentTableData = tableData;
    currentTableData.unshift({ id: Math.floor(Math.random() * 10000) });
    setTableData(currentTableData);
    setActiveRowIndex(0);
  };

  const isEmpty = (obj) => Object.keys(obj).length === 0;
  if (isEmpty(filterState)) {
    const filterSetData = {};
    headerData.map((headerElement) => {
      filterSetData[headerElement.field] = { value: null, matchMode: FilterMatchMode.CONTAINS };
      return null;
    });
    console.log(filterSetData);
    setFilterState(filterSetData);
  }
  const ActionBody = (options) => {
    switch (type) {
      case 'text':
        return (
          <>
            <Typography onClick={() => handleClick(options)} style={{ cursor: 'pointer' }}>
              {title}
            </Typography>
          </>
        );
      case 'button':
        return (
          <Button variant="contained" size="small">
            {title}
          </Button>
        );
      default:
        return undefined;
    }
  };
  const ActionIssueBody = (options) => {
    switch (issuetype) {
      case 'text':
        return (
          <>
            <Typography onClick={() => handleClick(options)} style={{ cursor: 'pointer' }}>
              {issuetitle}
            </Typography>
          </>
        );
      case 'button':
        return (
          <Button variant="contained" size="small" style={{ marginLeft: '0.4rem', padding: '0.2rem' }}>
            {issuetitle}
          </Button>
        );
      default:
        return undefined;
    }
  };
  const ActionSaveChangesBody = (options) => {
    switch (saveChangestype) {
      case 'text':
        return (
          <>
            <Typography onClick={() => handleClick(options)} style={{ cursor: 'pointer' }}>
              {saveChangestitle}
            </Typography>
          </>
        );
      case 'button':
        return (
          <Button variant="contained" size="small">
            {saveChangestitle}
          </Button>
        );
      default:
        return undefined;
    }
  };
  const ActionEditBody = (options) => {
    switch (edittype) {
      case 'text':
        return (
          <>
            <Typography onClick={() => handleClick(options)} style={{ cursor: 'pointer' }}>
              {edittitle}
            </Typography>
          </>
        );
      case 'button':
        return (
          <Button variant="contained" size="small" style={{ marginLeft: '0.4rem', padding: '0.2rem' }}>
            {edittitle}
          </Button>
        );
      default:
        return undefined;
    }
  };
  const ActionPrintBody = (options) => {
    switch (printtype) {
      case 'text':
        return (
          <>
            <Typography onClick={() => handleClick(options)} style={{ cursor: 'pointer' }}>
              {printtitle}
            </Typography>
          </>
        );
      case 'button':
        return (
          <Button variant="contained" size="small" style={{ marginLeft: '0.4rem', padding: '0.2rem' }}>
            {printtitle}
          </Button>
        );
      default:
        return undefined;
    }
  };

  const getDate = (val) => {
    console.log('val...', val);
    setSelectedDate(val);
  };
  const handleClickLink = (rowData) => console.log('rowData...', rowData);
  const handleChangeBody = (options, idx) => {
    console.log('options...', headCellsType[idx]);
    const key = Object.keys(options)[idx];
    const newVal = { key, value: options[key] };
    switch (headCellsType[idx]) {
      case 'BUTTON':
        return <Button variant="contained">{newVal.value}</Button>;
      case 'NONE':
        return <Typography style={{ fontSize: '13px' }}>{newVal.value}</Typography>;
      case 'LINK':
        return (
          <Typography
            style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', color: 'blue' }}
            onClick={() => handleClickLink(options)}
          >
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
              value={getDate(newVal.value)}
              getSelectedDate={(dt) => console.log('Selected Date is...', dt)}
              getIsoDate={(dt) => getDate(dt)}
              size="large"
            />
          </div>
        );
      default:
        return undefined;
    }
  };
  const handleClick = (options) => console.log('selected row...', options);
  return (
    <Grid container spacing={1}>
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://unpkg.com/primereact/resources/themes/lara-${themeMode}-indigo/theme.css`}
        />
      </Helmet>
      {btnLabel && (
        <Grid item display="flex" justifyContent="flex-end" xs={12} lg={12}>
          <Button variant="contained" size="small" onClick={addNewProject}>
            {btnLabel}
          </Button>
        </Grid>
      )}
      <Grid item xs={12} lg={12}>
        <DataTable
          header={header}
          globalFilter={globalFilter}
          value={rowData}
          editingRows={editingRows}
          onRowEditChange={onRowEditChange}
          onRowEditComplete={onRowEditComplete}
          // filters={filterState}
          filterDisplay="menu"
          {...other}
        >
          {headerData.map((headerElement, idx) => (
            <Column
              editor={(options) => switchEditor(headerElement.editorElement, options)}
              {...headerElement}
              bodyStyle={{
                textAlign: `${numericFields && numericFields.includes(headerElement.field) ? 'center' : ''}`
              }}
              className={numericFields && numericFields.includes(headerElement.field) ? 'd-data-cls' : ''}
              body={(options) => handleChangeBody(options, idx)}
            />
          ))}
          {editOption ? (
            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
          ) : null}
          {showActionColumn ? (
            <Column
              field="Action"
              header="Action"
              columnKey="actionKey"
              body={(options) => ActionBody(options)}
              style={{
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
            />
          ) : null}
          {showIssueColumn ? (
            <Column
              header="ISSUE"
              columnKey="actionKey"
              body={(options) => ActionIssueBody(options)}
              style={{
                minWidth: '6rem',
                width: '6rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
            />
          ) : null}
          {showSaveChangesColumn ? (
            <Column
              header="SAVE CHANGES"
              columnKey="actionKey"
              body={(options) => ActionSaveChangesBody(options)}
              style={{
                minWidth: '6rem',
                width: '6rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
            />
          ) : null}
          {showEditColumn ? (
            <Column
              header="EDIT"
              columnKey="actionKey"
              body={(options) => ActionEditBody(options)}
              style={{
                minWidth: '6rem',
                width: '6rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
            />
          ) : null}
          {showPrintColumn ? (
            <Column
              header="PRINT"
              columnKey="actionKey"
              body={(options) => ActionPrintBody(options)}
              style={{
                minWidth: '6rem',
                width: '6rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
            />
          ) : null}
        </DataTable>
      </Grid>
    </Grid>
  );
}
