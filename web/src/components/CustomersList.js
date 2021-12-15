import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
  Grid,
  TextField,
  Autocomplete,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import SimpleTable from './table/simpleTable';
import jsonData from '../utils/customerslist.json';

function CustomersList({ openFlag, handleCloseDialog, showDialog }) {
  const [open, setOpen] = useState(openFlag);
  const [showFilter, setShowFilter] = useState(true);
  const numericFields = ['custno'];
  console.log('openFlag', openFlag);
  console.log('open', open);
  const handleClose = () => {
    openFlag = false;
    setOpen(openFlag);
    handleCloseDialog(openFlag);
  };

  const columnData = [
    {
      field: 'custno',
      header: 'Customer No',
      sortable: true,
      editorElement: 'text',
      filter: true
    },
    {
      field: 'name',
      header: 'Customer Name',
      sortable: true,
      editorElement: 'text',
      filter: true
    },
    {
      field: 'address',
      header: 'Address',
      sortable: true,
      editorElement: 'text',
      filter: true
    },
    {
      field: 'sname',
      header: 'Customer Short Name',
      sortable: true,
      editorElement: 'text',
      filter: true
    }
  ];

  const CustomerTable = () => (
    <SimpleTable
      rowData={jsonData}
      headerData={columnData}
      paginator
      rowsPerPageOptions={[10, 20, 50, 100]}
      rows={10}
      showGridlines
      responsiveLayout="scroll"
      resizableColumns
      columnResizeMode="expand"
      size="small"
      dataKey="id"
      editMode="row"
      numericFields={numericFields}
    />
  );

  const CustomerFilter = () => (
    <Grid hidden={!(showFilter === 'panel1' || showFilter === true)} container spacing={3}>
      <Grid item xs={12}>
        <Accordion style={{ boxShadow: 'none' }} fullWidth>
          <AccordionSummary
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}
            expandIcon={<ArrowRight />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography variant="h6">Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
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
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );

  return (
    <Grid style={{ padding: '30px 20px', width: '100%', margin: '-35px auto' }}>
      {!showDialog ? (
        <Dialog open={openFlag} onClose={handleClose} fullWidth maxWidth="lg">
          {!showDialog && (
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
          )}
          {!showDialog ? (
            <DialogContent>
              <Grid style={{ marginTop: '0.5rem', marginBottom: '0.35rem' }}>
                <CustomerFilter />
              </Grid>
              <CustomerTable />
            </DialogContent>
          ) : (
            <CustomerTable />
          )}
          {!showDialog && (
            <DialogActions>
              <Button onClick={handleClose}>Save short names</Button>
            </DialogActions>
          )}
        </Dialog>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <CustomerFilter />
          </Grid>
          <Grid item xs={12}>
            <CustomerTable />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default CustomersList;
