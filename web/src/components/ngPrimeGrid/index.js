import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { TextField, Grid, Paper, Button, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { FilterMatchMode } from 'primereact/api';
import { useDispatch, connect } from 'react-redux';
import { ThemeSettingChange } from '../../redux/actions/themeSettingsActions';
import useSettings from '../../hooks/useSettings';
import jsonData from '../../utils/tabledata.json';
import filterData from '../../utils/filterdata.json';
import FilterComponent from '../FilterComponent';
import ProminentAppBar from '../header/header';
import '../../Styles/app.scss';

function PrimeGrid(theme) {
  const { themeMode, onChangeMode } = useSettings();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ThemeSettingChange());
  });
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
  const [globalFilter, setGlobalFilter] = useState(null);
  // filtercomponent
  const [stockFilter, setStockFilter] = useState(null);
  const [descFilter, setdescFilter] = useState(null);
  const [qtyFilter, setqtyFilter] = useState(null);
  const [uomFilter, setuomFilter] = useState(null);
  const [hqtyFilter, sethqtyFilter] = useState(null);
  const [handFilter, sethandFilter] = useState(null);
  const [owanFilter, setowanFilter] = useState(null);
  const [fwanFilter, setfwanFilter] = useState(null);

  const [filters1, setFilters1] = useState({
    code: { value: null, matchMode: FilterMatchMode.CONTAINS },
    desc: { value: null, matchMode: FilterMatchMode.CONTAINS },
    qty: { value: null, matchMode: FilterMatchMode.CONTAINS },
    uom: { value: null, matchMode: FilterMatchMode.CONTAINS },
    hqty: { value: null, matchMode: FilterMatchMode.CONTAINS },
    hand: { value: null, matchMode: FilterMatchMode.CONTAINS },
    owan: { value: null, matchMode: FilterMatchMode.CONTAINS },
    fwan: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });

  const clearFilter1 = () => {
    setStockFilter('');
    setdescFilter('');
    setqtyFilter('');
    setuomFilter('');
    sethqtyFilter('');
    sethandFilter('');
    setowanFilter('');
    setfwanFilter('');
    const _filters1 = { ...filters1 };
    _filters1.code.value = null;
    _filters1.desc.value = null;
    _filters1.qty.value = null;
    _filters1.uom.value = null;
    _filters1.hqty.value = null;
    _filters1.hand.value = null;
    _filters1.owan.value = null;
    _filters1.fwan.value = null;
    setFilters1(_filters1);
  };
  const onStockFilterChange = () => {
    // const value = e.target.value;
    const _filters1 = { ...filters1 };
    _filters1.code.value = stockFilter;
    _filters1.desc.value = descFilter;
    _filters1.qty.value = qtyFilter;
    _filters1.uom.value = uomFilter;
    _filters1.hqty.value = hqtyFilter;
    _filters1.hand.value = handFilter;
    _filters1.owan.value = owanFilter;
    _filters1.fwan.value = fwanFilter;
    setFilters1(_filters1);
    // setStockFilter(value);
  };

  const header = (
    <div className="datatable-crud-demo">
      <div className="table-header">
        <h4>PRODUCT DETAILS</h4>
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

  const detailsBody = () => <Button variant="contained">Details</Button>;
  // const [filterdata, setfilterdata] = useState(jsonData);
  const paperStyle = { padding: '5px 5px', margin: '20px auto', marginTop: '0px' };

  return (
    <Grid>
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://unpkg.com/primereact/resources/themes/lara-${themeMode}-indigo/theme.css`}
        />
      </Helmet>
      <Grid>
        <ProminentAppBar height="15px" />
        <Paper style={paperStyle} elevation={1}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                value={stockFilter}
                onChange={(e) => {
                  setStockFilter(e.target.value);
                  // filterdata.code = e.target.value;
                }}
                fullWidth
                size="small"
                label="Stock Code"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                value={descFilter}
                onChange={(e) => setdescFilter(e.target.value)}
                fullWidth
                size="small"
                label="Description"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                value={qtyFilter}
                onChange={(e) => setqtyFilter(e.target.value)}
                fullWidth
                size="small"
                label="Qty"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Autocomplete
                size="small"
                options={['Each', 'Kg']}
                value={uomFilter}
                renderInput={(params) => <TextField size="small" {...params} label="Inv UOM" />}
                fullWidth
                onChange={(event, newValue) => {
                  setuomFilter(newValue);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                value={hqtyFilter}
                onChange={(e) => sethqtyFilter(e.target.value)}
                fullWidth
                size="small"
                label="Hold Qty"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                value={handFilter}
                onChange={(e) => sethandFilter(e.target.value)}
                fullWidth
                size="small"
                label="On-hand"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                value={owanFilter}
                onChange={(e) => setowanFilter(e.target.value)}
                fullWidth
                size="small"
                label="On-wan"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                value={fwanFilter}
                onChange={(e) => setfwanFilter(e.target.value)}
                fullWidth
                size="small"
                label="From-wan"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2} lg={1}>
              <Button onClick={onStockFilterChange} startIcon={<SearchIcon />} variant="contained">
                Filter
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={2} lg={1}>
              <Button onClick={clearFilter1} startIcon={<CloseIcon />} variant="contained">
                Clear
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
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
        editMode="row"
        onRowEditComplete={onRowEditComplete}
        reorderableColumns
        dataKey="code"
        // onRowReorder={onRowReorder}
        scrollable
        scrollHeight="400px"
        header={header}
        filterDisplay="row"
        globalFilterFields={['code', 'desc', 'qty', 'uom', 'hqty', 'hand', 'owan', 'fwan']}
        rowsPerPageOptions={[10, 20, 50, 100]}
        globalFilter={globalFilter}
        style={{ marginTop: '10px' }}
        filters={filters1}
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
          reorderable={false}
          filter
          filterclear
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
        />
        <Column
          columnKey="owan"
          field="owan"
          header="Van-Stock"
          sortable
          editor={(options) => textEditor(options)}
          filter
          style={{
            minWidth: '12rem',
            width: '12rem',
            paddingBottom: '0.1rem',
            paddingTop: '0.1rem'
          }}
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
        />
        <Column
          columnKey="edit"
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
        <Column
          columnKey="details"
          body={detailsBody}
          style={{
            minWidth: '6rem',
            width: '6rem',
            paddingBottom: '0.1rem',
            paddingTop: '0.1rem'
          }}
        />
      </DataTable>
    </Grid>
  );
}

function mapStateToProps(state) {
  const { theme } = state.ThemeReducer;
  return {
    theme
  };
}

export default connect(mapStateToProps)(PrimeGrid);
