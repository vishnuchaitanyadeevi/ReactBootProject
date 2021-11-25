import React, { Fragment, useState, useCallback } from 'react';

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
      <div>
        <Button label="Add New Project" onClick={addNewProject} />
      </div>
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
        <Column field="status" header="Status" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        {/* <Column field="prjno" header="Project Name" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column field="lcnm" header="Location Name" editor={(options) => textEditor(options)} style={{ width: '20%' }} /> */}
        <Column
          field="bspct"
          header="Business ProjCat"
          editor={(options) => textEditor(options)}
          style={{ width: '20%' }}
        />
        <Column field="sdt" header="Start Date" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column field="edt" header="End Date" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column field="extp" header="Expiry Type" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column field="grpd" header="Grouped" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column field="prm" header="Primary" editor={(options) => textEditor(options)} style={{ width: '20%' }} />
        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
      </DataTable>
    </div>
  );
}
