import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';
// data grid
const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 150,
    editable: false
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'Cannot sort this',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`
  },
  {
    field: 'mob',
    headerName: 'Contact',
    type: 'phone',
    width: 150,
    editable: false
  },
  {
    field: 'doj',
    headerName: 'Date of Joining',
    type: 'date',
    width: 1580,
    editable: false
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', rating: 10, mob: 9999999999, doj: new Date('2013/12/23') },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', rating: 8, mob: 9999999999, doj: new Date('2013/12/22') },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', rating: 9, mob: 9999999999, doj: new Date('2013/12/21') },
  { id: 4, lastName: 'Stark', firstName: 'Arya', rating: 10, mob: 9999999999, doj: new Date('2013/12/25') },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', rating: 7, mob: 9999999999, doj: new Date('2013/12/24') },
  { id: 6, lastName: 'Melisandre', firstName: 'John', rating: 10, mob: 9999999999, doj: new Date('2013/12/20') },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', rating: 5, mob: 9999999999, doj: new Date('2013/12/26') },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', rating: 8, mob: 9999999999, doj: new Date('2013/12/27') },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', rating: 9, mob: 9999999999, doj: new Date('2013/12/28') }
];
// data grid ends
function Data() {
  return (
    <center>
      <div style={{ height: 400 }}>
        <Typography>EMPLOYEE DATA</Typography>
        <DataGrid
          align="center"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </center>
  );
}

export default Data;
