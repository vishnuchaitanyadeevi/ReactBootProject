import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Checkbox, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Helmet } from 'react-helmet';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Tooltip from '@mui/material/Tooltip';
import { FilterMatchMode } from 'primereact/api';
import { COMPONENTS, rowsPerPageOptions } from '../../utils/constants';
import useSettings from '../../hooks/useSettings';
import RenderComponent from '../RenderComponent';

// import ngPrimeGrid from '../ngPrimeGrid';
import '../../Styles/app.scss';

export default function SimpleTable({
  rowData,
  headerData,
  editOption,
  showActionColumn,
  type,
  title,
  btnLabel,
  numericFields,
  headCellsType,
  isglobalfilter = true,
  ...other
}) {
  const { themeMode, onChangeMode } = useSettings();
  const [tableData, setTableData] = useState();
  const [editingRows, setEditingRows] = useState({});
  const [filterState, setFilterState] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const { lang } = useSettings();
  const [payload, setPayload] = useState({});
  const { TEXT_FIELD, CHECKBOX, AUTOCOMPLETE, DATEPICKER, TEXT_AREA, MULTI_SELECT_BOX } = COMPONENTS;

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
          <Typography onClick={() => handleClick(options)} style={{ cursor: 'pointer' }}>
            {title}
          </Typography>
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

  const editIcon = () => <EditIcon />;

  const handleChangeDate = (key, value, options) => {
    // find id and index from json and update that value
    // Find index of specific object using findIndex method.
    const objIndex = rowData.indexOf(options);
    if (objIndex !== -1) {
      rowData[objIndex][key] = value;
    }
    setIsUpdate(true);
  };
  useEffect(() => {
    if (isUpdate) {
      console.log('calling..date change');
      setIsUpdate(false);
    }
  }, [isUpdate]);

  const handleChangeTextfield = (key, value, options) => {
    const objIndex = rowData.indexOf(options);
    if (objIndex !== -1) {
      rowData[objIndex][key] = value;
    }
    setIsUpdate(true);
  };
  const handleClickLink = (rowData) => console.log('rowData...', rowData);
  const handleChangeBody = (options, idx) => {
    const key = Object.keys(options)[idx];
    const newVal = { key, value: options[key] };
    switch (headCellsType[idx]) {
      case 'BUTTON':
        return (
          <Tooltip title={newVal.value}>
            <Button variant="contained" tooltip={newVal.value}>
              {newVal.value}
            </Button>
          </Tooltip>
        );
      case 'NONE':
        return (
          <Tooltip title={newVal?.value}>
            <Typography style={{ fontSize: '13px' }}>{newVal?.value}</Typography>
          </Tooltip>
        );
      case 'TEXTFIELD':
        if (newVal) {
          return (
            <Grid style={{ marginTop: '0.1rem', marginBottom: '0.1rem' }}>
              <RenderComponent
                metaData={{
                  control: TEXT_FIELD,
                  key: `${newVal?.key}`,
                  label: `${newVal?.key}`,
                  placeholder: `${newVal?.key}`,
                  columnWidth: 12,
                  size: 'large'
                }}
                payload={{ [newVal?.key]: newVal?.value }}
                ind={1}
                handleChange={(key, val) => handleChangeTextfield(key, val, options)}
              />
            </Grid>
          );
        }
        break;
      case 'LINK':
        return (
          <Tooltip title={newVal.value}>
            <Typography
              style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', color: 'blue' }}
              onClick={() => handleClickLink(options)}
            >
              {newVal.value}
            </Typography>
          </Tooltip>
        );
      case 'DATE':
        return (
          <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <RenderComponent
              metaData={{
                control: DATEPICKER,
                key: `${newVal?.key}`,
                label: `${newVal?.key}`,
                placeholder: `${newVal?.key}`,
                columnWidth: 12,
                size: 'large'
              }}
              payload={{ [newVal?.key]: newVal?.value }}
              ind={1}
              handleChange={(key, val) => handleChangeDate(key, val, options)}
            />
          </div>
        );
      case 'ICON':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span
              onClick={() => headerData[idx].onClick(options)}
              onKeyDown={() => headerData[idx].onClick(options)}
              role="button"
              tabIndex={0}
            >
              {headerData[idx].icon}
            </span>
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
          header={isglobalfilter ? header : null}
          globalFilter={globalFilter}
          value={rowData}
          editingRows={editingRows}
          onRowEditChange={onRowEditChange}
          onRowEditComplete={onRowEditComplete}
          // filters={filterState}
          filterDisplay="menu"
          responsiveLayout="scroll"
          emptyMessage="NO DATA FOUND"
          rowsPerPageOptions={rowsPerPageOptions}
          // scrollable
          {...other}
        >
          {headerData.map((headerElement, idx) => (
            <Column
              frozen={headerElement.isFrozen}
              style={{
                position: `${headerElement.isFrozen ? 'sticky' : ''}`
              }}
              editor={(options) => switchEditor(headerElement.editorElement, options)}
              {...headerElement}
              bodyStyle={{
                textAlign: `${numericFields && numericFields.includes(headerElement.field) ? 'center' : ''}`
              }}
              className={numericFields && numericFields.includes(headerElement.field) ? 'd-data-cls' : ''}
              body={(options) => handleChangeBody(options, idx)}
            />
          ))}
          {editOption ? <Column field="Action" header="Action" body={(options) => editIcon(options)} /> : null}
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
        </DataTable>
      </Grid>
    </Grid>
  );
}
