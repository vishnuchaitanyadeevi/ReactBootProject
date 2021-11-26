import React, { Fragment, useState, useCallback } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button, Grid } from '@mui/material';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import jsonData from '../../utils/project-table-data.json';
import '../../Styles/app.scss';

export default function ProjectTable() {
  const [tableData, setTableData] = useState(jsonData);
  const [editingRows, setEditingRows] = useState({});
  const onRowEditChange = (e) => {
    console.log(e);
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
    <div>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={addNewProject} variant="contained">
          Add New Service Subject
        </Button>
      </Grid>
      <DataTable
        value={tableData}
        showGridlines
        responsiveLayout="scroll"
        resizableColumns
        columnResizeMode="expand"
        size="small"
        rows={10}
        editMode="row"
        editingRows={editingRows}
        onRowEditChange={onRowEditChange}
        dataKey="id"
      >
        <Column
          field="itemCode"
          header="Item Code"
          editor={(options) => textEditor(options)}
          style={{ width: '20%' }}
        />
        <Column
          field="itemName"
          header="Item Name"
          editor={(options) => textEditor(options)}
          style={{ width: '20%' }}
        />
        <Column field="sla" header="SLA" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column field="oStatus" header="O/status" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column
          field="serialNumber"
          header="Serial Number"
          editor={(options) => textEditor(options)}
          style={{ width: '20%' }}
        />
        <Column field="specialNotes" header="Special Notes" editor={(options) => textEditor(options)} />
        <Column field="qty" header="Qty" editor={(options) => textEditor(options)} />
        <Column
          field="serviceSubjOwnerShip"
          header="Service Subject Ownership"
          editor={(options) => textEditor(options)}
        />
        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
      </DataTable>
    </div>
  );
}
