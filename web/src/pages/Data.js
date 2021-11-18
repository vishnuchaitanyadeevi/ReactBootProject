import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import ngPrimeGrid from '../components/ngPrimeGrid';
import MainNavbar from '../layouts/main/MainNavbar';
import jsonData from '../tabledata.json';
import '../Styles/app.scss';

function Data() {
  const [tableData, setTableData] = useState(jsonData);
  const [selected, setSelected] = useState(null);
  const onRowEditComplete = (e) => {
    const _tableData = [...tableData];
    const { newData, index } = e;
    _tableData[index] = newData;
    setTableData(_tableData);
  };
  const textEditor = (options) => (
    <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />
  );
  /* const onRowReorder = (e) => {
     setTableData(e.value);
   }; */

  return (
    <div>
      <div>
        <MainNavbar />
      </div>
      <div className="rel">
        <div>
          <DataTable
            value={tableData}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            paginator
            rows={5}
            selection={selected}
            onSelectionChange={(e) => setSelected(e.value)}
            stripedRows
            editMode="row"
            onRowEditComplete={onRowEditComplete}
            reorderableColumns
            // onRowReorder={onRowReorder}
          >
            {/* <Column columnKey="rowreorder" field="rowreorder" rowReorder style={{ width: '3em' }} /> */}
            <Column columnKey="selection" field="selection" selectionMode="multiple" />
            <Column
              columnKey="code"
              field="code"
              header="Stock Code"
              sortable
              editor={(options) => textEditor(options)}
            />
            <Column
              columnKey="desc"
              field="desc"
              header="Description"
              sortable
              editor={(options) => textEditor(options)}
            />
            <Column columnKey="qty" field="qty" header="Qty" sortable editor={(options) => textEditor(options)} />
            <Column columnKey="uom" field="uom" header="Inv UOM" sortable editor={(options) => textEditor(options)} />
            <Column
              columnKey="hqty"
              field="hqty"
              header="Hold Qty"
              sortable
              editor={(options) => textEditor(options)}
            />
            <Column columnKey="hand" field="hand" header="On-hand" sortable editor={(options) => textEditor(options)} />
            <Column columnKey="owan" field="owan" header="On-wan" sortable editor={(options) => textEditor(options)} />
            <Column
              columnKey="fwan"
              field="fwan"
              header="From-wan"
              sortable
              editor={(options) => textEditor(options)}
            />
            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default Data;
