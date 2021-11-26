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
import FilterComponent from '../components/FilterComponent';
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

  const [filters1, setFilters1] = useState({
    code: { constraints: [{ value: stockFilter, matchMode: FilterMatchMode.CONTAINS }] },
    desc: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    qty: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    uom: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    hqty: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    hand: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    owan: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    fwan: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] }
  });
  const initFilters1 = () => {
    setFilters1({
      code: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      desc: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      qty: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      uom: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      hqty: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      hand: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      owan: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      fwan: { constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] }
    });
  };
  const clearFilter1 = () => {
    initFilters1();
  };
  const onStockFilterChange = (e) => {
    const { value } = e.target.value;
    const _filters1 = { ...filters1 };
    _filters1.code.value = value;
    setFilters1(_filters1);
    setStockFilter(value);
  };

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
      <table style={{ borderSpacing: '10px' }}>
        <tr>
          <td>
            <Button className="p-button-sm" label="Filter" icon="pi pi-search" onClick={initFilters1} />
          </td>
          <td>
            <Button className="p-button-sm" label="Clear" icon="pi pi-times" onClick={clearFilter1} />
          </td>
        </tr>
      </table>
    </div>
  );

  const toolbardataleft = () => (
    <div>
      <table style={{ borderSpacing: '10px' }}>
        <tr>
          <td>
            <InputText
              className="p-inputtext-sm"
              type="search"
              placeholder="Stock Code"
              onChange={onStockFilterChange}
            />
          </td>
          <td>
            <InputText className="p-inputtext-sm" type="search" placeholder="Description" />
          </td>
          <td>
            <InputText className="p-inputtext-sm" type="search" placeholder="Qty" />
          </td>
          <td>
            <InputText className="p-inputtext-sm" type="search" placeholder="Inv UOM" />
          </td>
        </tr>
        <tr>
          <td>
            <InputText className="p-inputtext-sm" type="search" placeholder="Hold Qty" />
          </td>
          <td>
            <InputText className="p-inputtext-sm" type="search" placeholder="On-hand" />
          </td>
          <td>
            <InputText className="p-inputtext-sm" type="search" placeholder="Van Stock" />
          </td>
          <td>
            <InputText className="p-inputtext-sm" type="search" placeholder="From-wan" />
          </td>
        </tr>
      </table>
    </div>
  );

  return (
    <div>
      <div className="rel">
        <div>
          {/* <Toolbar left={toolbardataleft} right={toolbardataright} className="p-mb-4" style={{ padding: '0.1rem' }} /> */}
          <FilterComponent />
          <DataTable
            value={tableData}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            paginator
            rows={10}
            headerClassName="headerFont"
            headerStyle={{ fontSize: 'small', height: '25px' }}
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
            filterDisplay="row"
            globalFilterFields={['code', 'desc', 'qty', 'uom', 'hqty', 'hand', 'owan', 'fwan']}
            rowsPerPageOptions={[10, 20, 50, 100]}
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
                paddingTop: '0.1rem',
                textAlign: 'center'
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
              header="Van Stock"
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
