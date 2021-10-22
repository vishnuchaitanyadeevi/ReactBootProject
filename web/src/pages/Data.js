import React, { useState, forwardRef } from 'react';
import MaterialTable from '@material-table/core';
import GetAppIcon from '@mui/icons-material/GetApp';
import AddBox from '@mui/icons-material/AddBox';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';
import MainNavbar from '../layouts/main/MainNavbar';
import '../Styles/app.scss';

function Data() {
  const TABLE_ICONS = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const [tableData, setTableData] = useState([
    {
      name: 'Raj',
      email: 'Raj@gmail.com',
      phone: 7894561230,
      age: null,
      gender: 'M',
      city: 'Chennai',
      fee: 78456,
      dob: '2000-08-18'
    },
    {
      name: 'Mohan',
      email: 'mohan@gmail.com',
      phone: 7845621590,
      age: 35,
      gender: 'M',
      city: 'Delhi',
      fee: 456125,
      dob: '2000-07-17'
    },
    {
      name: 'Sweety',
      email: 'sweety@gmail.com',
      phone: 741852912,
      age: 17,
      gender: 'F',
      city: 'Noida',
      fee: 458796,
      dob: '2000-06-16'
    },
    {
      name: 'Vikas',
      email: 'vikas@gmail.com',
      phone: 9876543210,
      age: 20,
      gender: 'M',
      city: 'Mumbai',
      fee: 874569,
      dob: '2000-05-15'
    },
    {
      name: 'Neha',
      email: 'neha@gmail.com',
      phone: 7845621301,
      age: 25,
      gender: 'F',
      city: 'Patna',
      fee: 748521,
      dob: '2000-04-14'
    },
    {
      name: 'Mohan',
      email: 'mohan@gmail.com',
      phone: 7845621590,
      age: 35,
      gender: 'M',
      city: 'Delhi',
      fee: 456125,
      dob: '2000-03-13'
    },
    {
      name: 'Sweety',
      email: 'sweety@gmail.com',
      phone: 741852912,
      age: 17,
      gender: 'F',
      city: 'Noida',
      fee: 458796,
      dob: '2000-02-12'
    },
    {
      name: 'Vikas',
      email: 'vikas@gmail.com',
      phone: 9876543210,
      age: 20,
      gender: 'M',
      city: 'Mumbai',
      fee: 874569,
      dob: '2000-01-11'
    },
    {
      name: 'Raj',
      email: 'Raj@gmail.com',
      phone: 7894561230,
      age: null,
      gender: 'M',
      city: 'Chennai',
      fee: 78456,
      dob: '2000-09-10'
    },
    {
      name: 'Mohan',
      email: 'mohan@gmail.com',
      phone: 7845621590,
      age: 35,
      gender: 'M',
      city: 'Delhi',
      fee: 456125,
      dob: '2000-10-09'
    },
    {
      name: 'Sweety',
      email: 'sweety@gmail.com',
      phone: 741852912,
      age: 17,
      gender: 'F',
      city: 'Noida',
      fee: 458796,
      dob: '2000-11-08'
    },
    {
      name: 'Vikas',
      email: 'vikas@gmail.com',
      phone: 9876543210,
      age: 20,
      gender: 'M',
      city: 'Mumbai',
      fee: 874569,
      dob: '2000-12-07'
    }
  ]);
  /* const [value, setValue] = React.useState(new Date('2000-08-18'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
*/

  const columns = [
    {
      title: 'Name',
      field: 'name',
      sorting: false,
      filtering: false,
      cellStyle: { background: '#009688' },
      headerStyle: { color: '#fff' }
    },
    {
      title: 'Email',
      field: 'email',
      filterPlaceholder: 'filter by mail'
    },
    {
      title: 'Phone Number',
      field: 'phone',
      align: 'center',
      grouping: false,
      filterPlaceholder: 'filter '
    },
    {
      title: 'Age',
      field: 'age',
      emptyValue: () => <em>null</em>,
      render: (rowData) => (
        <div style={{ background: rowData.age >= 18 ? '#008000aa' : '#f90000aa', borderRadius: '4px', paddingLeft: 5 }}>
          {rowData.age >= 18 ? '18+' : '18-'}
        </div>
      ),
      searchable: false,
      export: false
    },
    {
      title: 'Date of Birth',
      field: 'dob'
      /* render: (row) =>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          // label='Date desktop'
          inputFormat='MM/dd/yyyy'
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> 
      */
    },
    {
      title: 'Gender',
      field: 'gender',
      lookup: { M: 'Male', F: 'Female' }
    },
    {
      title: 'City',
      field: 'city',
      filterPlaceholder: 'filter'
    },
    {
      title: 'School Fee',
      field: 'fee',
      type: 'currency',
      currencySetting: { currencyCode: 'INR', minimumFractionDigits: 1 },
      cellStyle: { background: '#009688' },
      headerStyle: { color: '#fff' }
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
              sorting: true,
              search: true,
              searchFieldAlignment: 'right',
              searchAutoFocus: true,
              searchFieldVariant: 'standard',
              filtering: true,
              paging: true,
              pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
              pageSize: 5,
              paginationType: 'stepped',
              showFirstLastPageButtons: false,
              exportButton: true,
              exportAllData: true,
              exportFileName: 'TableData',
              addRowPosition: 'first',
              actionsColumnIndex: -1,
              selection: true,
              showSelectAllCheckbox: true,
              showTextRowsSelected: false,
              selectionProps: (rowData) => ({
                disabled: rowData.age == null
                // color:'primary'
              }),
              grouping: true,
              columnsButton: true,
              rowStyle: (data, index) => (index % 2 === 0 ? { background: '#f5f5f5' } : null),
              headerStyle: { background: '#f44336', color: '#fff' }
            }}
            title="Student Information"
            icons={TABLE_ICONS}
          />
        </div>
      </div>
    </div>
  );
}

export default Data;
