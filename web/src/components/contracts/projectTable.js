import React, { Fragment, useState, useCallback } from 'react';
import { Grid } from '@mui/material';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import ngPrimeGrid from '../ngPrimeGrid';
import jsonData from '../../utils/project-table-data.json';
import '../../Styles/app.scss';
import SimpleTable from '../table/simpleTable';

export default function ProjectTable({ tableDataInput, columnDataForProjects, ...other }) {
  const [tableData, setTableData] = useState(tableDataInput);
  const [editingRows, setEditingRows] = useState({});
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

  const addNewProject = () => {
    const currentTableData = tableData;
    currentTableData.unshift({ id: Math.floor(Math.random() * 10000) });
    setTableData(currentTableData);
    setActiveRowIndex(0);
  };
  return (
    <Grid container spacing={1}>
      <Grid item justifyContent="right" display="flex" xs={12} lg={12}>
        <Button label="Add New Project" onClick={addNewProject} />
      </Grid>
      <Grid item xs={12} lg={12}>
        <SimpleTable rowData={tableDataInput} headerData={columnDataForProjects} editingRows={editingRows} {...other} />
      </Grid>
    </Grid>
  );
}
