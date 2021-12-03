import React, { Fragment, useState, useCallback } from 'react';
import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import Checkbox from '@mui/material/Checkbox';
import { FilterMatchMode } from 'primereact/api';
import useSettings from '../../hooks/useSettings';
// import ngPrimeGrid from '../ngPrimeGrid';
import jsonData from '../../utils/project-table-data.json';
import '../../Styles/app.scss';

export default function SimpleTable({ rowData, headerData, ...other }) {
  const { themeMode, onChangeMode } = useSettings();
  const [tableData, setTableData] = useState(rowData);
  const [editingRows, setEditingRows] = useState({});
  const [filterState, setFilterState] = useState({});
  const onRowEditChange = (e) => {
    setEditingRows(e.data);
  };

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

  return (
    <Grid container spacing={1}>
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://unpkg.com/primereact/resources/themes/lara-${themeMode}-indigo/theme.css`}
        />
      </Helmet>
      <Grid item xs={12} lg={12}>
        <DataTable
          value={tableData}
          editingRows={editingRows}
          onRowEditChange={onRowEditChange}
          filters={filterState}
          {...other}
        >
          {headerData.map((headerElement) => (
            <Column editor={(options) => switchEditor(headerElement.editorElement, options)} {...headerElement} />
          ))}
          <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
        </DataTable>
      </Grid>
    </Grid>
  );
}
