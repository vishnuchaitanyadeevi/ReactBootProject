import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Grid, TextField, Autocomplete } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import SimpleTable from './table/simpleTable';
import jsonData from '../utils/customerslist.json';

function CustomersList({ openFlag, handleCloseDialog }) {
  const [open, setOpen] = useState(openFlag);
  console.log('openFlag', openFlag);
  console.log('open', open);
  const handleClose = () => {
    openFlag = false;
    setOpen(openFlag);
    handleCloseDialog(openFlag);
  };

  const columnData = [
    { field: 'custno', header: 'Customer No', sortable: true },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'address', header: 'Address', sortable: true },
    { field: 'sname', header: 'Short Name', sortable: true }
  ];
  return (
    <Dialog open={openFlag} onClose={handleClose} fullWidth maxWidth="lg">
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Customers List
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid style={{ marginTop: '0.5rem', marginBottom: '0.35rem' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Autocomplete
                size="small"
                options={['Saudi Arabia', 'Jordan', 'Iraq', 'Kuwait', 'Oman', 'UAE']}
                // value={}
                renderInput={(params) => <TextField size="small" {...params} label="Country" />}
                fullWidth
                /* onChange={(event, newValue) => {
                set(newValue);
              }} */
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                // value={}
                /* onChange={(e) => {
                  set(e.target.value);
                  // filterdata.code = e.target.value;
                }} */
                fullWidth
                size="small"
                label="Customer Number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                // value={}
                // onChange={(e) => set(e.target.value)}
                fullWidth
                size="small"
                label="Customer Name"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                // value={}
                // onChange={(e) => set(e.target.value)}
                fullWidth
                size="small"
                label="Customer Address"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <TextField
                // value={}
                // onChange={(e) => set(e.target.value)}
                fullWidth
                size="small"
                label="Customer Contacts"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2} lg={1}>
              <Button size="small" startIcon={<SearchIcon />} variant="contained">
                Filter
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} md={2} lg={1}>
              <Button size="small" startIcon={<CloseIcon />} variant="contained">
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <SimpleTable
          rowData={jsonData}
          headerData={columnData}
          paginator
          rowsPerPageOptions={[10, 20, 50, 100]}
          rows={10}
          showGridlines
          size="small"
          editOption={false}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Save short names</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomersList;
