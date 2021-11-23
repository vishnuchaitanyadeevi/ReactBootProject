import React, { Fragment, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { FilterMatchMode } from 'primereact/api';
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
      style={{ minWidth: '12rem' }}
    />
  );
  /* const onRowReorder = (e) => {
     setTableData(e.value);
   }; */
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    code: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  // const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [globalFilter, setGlobalFilter] = useState(null);
  const [stockFilter, setStockFilter] = useState(null);
  /*
  const onGlobalFilterChange = (e) => {
    const { value } = e.target.value;
    const _filters = { ...filters };
    _filters.global.value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  */

  const header = (
    <div className="datatable-crud-demo">
      <div className="table-header">
        <h4>PRODUCTS LIST</h4>
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
  const footer = `--- END ---`;
  const toolbardataright = () => (
    <div>
      <Button className="p-button-sm" label="Filter" icon="pi pi-search" />
      <Button className="p-button-sm" label="Clear" icon="pi pi-times" />
    </div>
  );

  const toolbardataleft = () => (
    <div>
      <InputText className="p-inputtext-sm" type="search" placeholder="Stock Code" />
      <InputText className="p-inputtext-sm" type="search" placeholder="Description" />
      <InputText className="p-inputtext-sm" type="search" placeholder="Qty" />
      <InputText className="p-inputtext-sm" type="search" placeholder="Inv UOM" />
      <InputText className="p-inputtext-sm" type="search" placeholder="Hold Qty" />
      <InputText className="p-inputtext-sm" type="search" placeholder="On-hand" />
      <InputText className="p-inputtext-sm" type="search" placeholder="On-wan" />
      <InputText className="p-inputtext-sm" type="search" placeholder="From-wan" />
    </div>
  );

  return (
    <div>
      <div className="rel">
        <div>
          {/* <Toolbar left={toolbardataleft} right={toolbardataright} className="p-mb-4" /> */}
          <DataTable
            value={tableData}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            paginator
            rows={10}
            selection={selected}
            onSelectionChange={(e) => setSelected(e.value)}
            stripedRows
            editMode="row"
            onRowEditComplete={onRowEditComplete}
            reorderableColumns
            // filters={filters}
            dataKey="id"
            // scrollable
            // scrollDirection="both"
            // onRowReorder={onRowReorder}
            scrollable
            scrollHeight="400px"
            header={header}
            footer={footer}
            filterDisplay="row"
            globalFilterFields={['code', 'desc', 'qty', 'uom', 'hqty', 'hand', 'owan', 'fwan']}
            rowsPerPageOptions={[10, 25, 50]}
            globalFilter={globalFilter}
            style={{ marginTop: '10px' }}
          >
            {/* <Column columnKey="rowreorder" field="rowreorder" rowReorder style={{ width: '3em' }} /> */}
            <Column
              columnKey="selection"
              field="selection"
              selectionMode="multiple"
              reorderable={false}
              style={{
                minWidth: '3rem',
                width: '3rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
            />
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
              style={{
                minWidth: '12rem',
                width: '12rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
            />
            <Column
              columnKey="desc"
              field="desc"
              header="Description"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{
                minWidth: '12rem',
                width: '12rem',
                // Making Ellipsis for lengthy descriptions
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                // display: 'block',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="qty"
              field="qty"
              header="Qty"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{
                minWidth: '12rem',
                width: '12rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="uom"
              field="uom"
              header="Inv UOM"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{
                minWidth: '12rem',
                width: '12rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="hqty"
              field="hqty"
              header="Hold Qty"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{
                minWidth: '12rem',
                width: '12rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="hand"
              field="hand"
              header="On-hand"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{
                minWidth: '12rem',
                width: '12rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="owan"
              field="owan"
              header="On-wan"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{
                minWidth: '12rem',
                width: '12rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
              columnKey="fwan"
              field="fwan"
              header="From-wan"
              sortable
              editor={(options) => textEditor(options)}
              filter
              style={{
                minWidth: '12rem',
                width: '12rem',
                paddingBottom: '0.1rem',
                paddingTop: '0.1rem'
              }}
              // style={{ flexGrow: 1, flexBasis: '200px' }}
            />
            <Column
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
    </div>
  );
}

export default Data;
