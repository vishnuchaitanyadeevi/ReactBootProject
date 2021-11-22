import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import ngPrimeGrid from '../components/ngPrimeGrid';
import jsonData from '../utils/tabledata.json';
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
    <InputText
      type="text"
      value={options.value}
      onChange={(e) => options.editorCallback(e.target.value)}
      style={{ flexGrow: 1 }}
    />
  );
  /* const onRowReorder = (e) => {
     setTableData(e.value);
   }; */
  const header = (
    <div className="table-header">
      <div>Filters</div>
      <div>List of Products</div>
    </div>
  );
  const footer = `In total there are 8 products.`;

  return (
    <div>
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
            // scrollable
            // scrollDirection="both"
            // onRowReorder={onRowReorder}
            header={header}
            footer={footer}
            filterDisplay="row"
          >
            {/* <Column columnKey="rowreorder" field="rowreorder" rowReorder style={{ width: '3em' }} /> */}
            <Column columnKey="selection" field="selection" selectionMode="multiple" reorderable={false} />
            <Column
              columnKey="code"
              field="code"
              header="Stock Code"
              sortable
              editor={(options) => textEditor(options)}
              // frozen
              // style={{ flexGrow: 1, flexBasis: '200px' }}
              reorderable={false}
              filter
              style={{ minWidth: '12rem' }}
            />
            <Column
              columnKey="desc"
              field="desc"
              header="Description"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{ minWidth: '12rem' }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="qty"
              field="qty"
              header="Qty"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{ minWidth: '12rem' }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="uom"
              field="uom"
              header="Inv UOM"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{ minWidth: '12rem' }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="hqty"
              field="hqty"
              header="Hold Qty"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{ minWidth: '12rem' }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="hand"
              field="hand"
              header="On-hand"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{ minWidth: '12rem' }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="owan"
              field="owan"
              header="On-wan"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{ minWidth: '12rem' }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="fwan"
              field="fwan"
              header="From-wan"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{ minWidth: '12rem' }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              rowEditor
              headerstyle={{ width: '10%', minWidth: '8rem' }}
              bodyStyle={{ textAlign: 'center' }}
              style={{ width: '10%', minWidth: '8rem' }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default Data;
