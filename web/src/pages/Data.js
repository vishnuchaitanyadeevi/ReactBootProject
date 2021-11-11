import React, { useState, forwardRef } from 'react';
import MaterialTable from '@material-table/core';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider, DateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import GetAppIcon from '@mui/icons-material/GetApp';
import AddBox from '@mui/icons-material/AddBox';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';
import MainNavbar from '../layouts/main/MainNavbar';
import jsonData from '../tabledata.json';
import '../Styles/app.scss';

function Data() {
  const TABLE_ICONS = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} color="success" />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} color="error" />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} color="error" />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} color="success" />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} color="primary" />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  // const [dt, setdt] = React.useState(new Date());

  const [tableData, setTableData] = useState(jsonData);
  /* const [value, setValue] = React.useState(new Date('2000-08-18'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
*/

  const columns = [
    {
      title: 'Stock Code',
      field: 'code',
      filterPlaceholder: 'filter by Code',
      minWidth: 150,
      width: 150,
      // maxWidth: 150,
      align: 'left'
      // headerStyle: { color: '#fff' }
    },
    {
      title: 'Description',
      field: 'desc',
      filterPlaceholder: 'filter by Description',
      minWidth: 150,
      // maxWidth: 150,
      width: 150
    },
    {
      title: 'Qty',
      field: 'qty',
      grouping: false,
      filterPlaceholder: 'filter by qty',
      minWidth: 150,
      width: 150
    },
    {
      title: 'Inv UOM',
      field: 'uom',
      filterPlaceholder: 'filter by UOM',
      minWidth: 150,
      width: 150
      /* 
      render: (row) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            style={{ width: '100%', maxWidth: '100%', minWidth: '20%', marginTop: 10 }}
            renderInput={(props) => (
              <TextField
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  minWidth: '20%',
                  marginTop: 10
                }}
                {...props}
              />
            )}
            label="Date of Joining"
            // value={tableData.doj}
            onChange={(newValue) => {
              // setdt(newValue);
            }}
          />
        </LocalizationProvider>
      )
      */
    },
    {
      title: 'Hold qty',
      field: 'hqty',
      filterPlaceholder: 'filter by Hold qty',
      minWidth: 150,
      width: 150
    },
    {
      title: 'On-hand',
      field: 'hand',
      filterPlaceholder: 'filter by On-hand',
      minWidth: 150,
      width: 150
    },
    {
      title: 'On-wan',
      field: 'owan',
      filterPlaceholder: 'filter by On-wan',
      minWidth: 150,
      width: 150
    },
    {
      title: 'From-wan',
      field: 'fwan',
      filterPlaceholder: 'filter by From-wan',
      minWidth: 150,
      width: 150
    }
  ];
  return (
    <div>
      <div>
        <MainNavbar />
      </div>
      <div className="rel">
        <div>
          <MaterialTable
            columns={columns}
            data={tableData}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  setTableData([...tableData, newRow]);
                  setTimeout(() => resolve(), 500);
                }),
              onRowUpdate: (newRow, oldRow) =>
                new Promise((resolve, reject) => {
                  const updatedData = [...tableData];
                  updatedData[oldRow.tableData.id] = newRow;
                  setTableData(updatedData);
                  setTimeout(() => resolve(), 500);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  const updatedData = [...tableData];
                  updatedData.splice(selectedRow.tableData.id, 1);
                  setTableData(updatedData);
                  setTimeout(() => resolve(), 1000);
                })
            }}
            actions={[
              {
                icon: () => <GetAppIcon />,
                tooltip: 'Click me',
                onClick: (e, data) => console.log(data)
                // isFreeAction:true
              }
            ]}
            onSelectionChange={(selectedRows) => console.log(selectedRows)}
            options={{
              fixedColumns: {
                left: 2,
                right: 0
              },
              cellStyle: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', fontSize: 13 },
              sorting: true,
              search: true,
              searchFieldAlignment: 'right',
              searchAutoFocus: true,
              searchFieldVariant: 'standard',
              filtering: true,
              paging: true,
              pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
              pageSize: 5,
              showFirstLastPageButtons: false,
              exportButton: true,
              exportAllData: true,
              exportFileName: 'TableData',
              addRowPosition: 'first',
              actionsColumnIndex: -1,
              selection: true,
              showSelectAllCheckbox: true,
              showTextRowsSelected: true,
              columnResizable: true,
              padding: 'dense',
              selectionProps: (rowData) => ({
                // color:'primary'
              }),
              grouping: true,
              columnsButton: true,
              rowStyle: (data, index) => (index % 2 === 0 ? { background: '#f5f5f5' } : null),
              headerStyle: { background: '#01579b', color: 'white', fontSize: 13 },
              tableLayout: 'fixed'
            }}
            title="Material Picking List"
            icons={TABLE_ICONS}
          />
        </div>
      </div>
    </div>
  );
}

export default Data;
