import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Filters from './Filter/filter';
import { COMPONENTS } from '../utils/constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from './ServiceBoard/data';
import { POST_OFFICE } from '../redux/constants';
import jsonData from '../utils/customerslist.json';

function CustomersList({ openFlag, handleCloseDialog, showDialog }) {
  const masterData = useSelector((state) => state.MasterDataReducer);
  const dispatch = useDispatch();
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
  const headCellsType = ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'];

  const { TEXT_FIELD, AUTOCOMPLETE } = COMPONENTS;
  const FILTER_COMPONETS = [
    {
      control: AUTOCOMPLETE,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'country',
      label: 'serviceDashboard.country',
      placeholder: 'serviceDashboard.country',
      options: masterData?.country
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'CustomerNo',
      label: 'Customer Number',
      placeholder: 'Customer Name or ID'
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'customerName',
      label: 'Customer Name',
      placeholder: 'Customer Name'
    },
    {
      control: TEXT_FIELD,
      groupStyle: { marginLeft: '0.5rem', marginRight: '0.5rem' },
      key: 'customerAddress',
      label: 'Customer Address',
      placeholder: 'Customer Address'
    }
  ];
  const getFilterData = (data) => {
    console.log('Filtered data: ', data);
  };
  const getFilterDataPayloadChange = (key, val) => {
    console.log(key, val);
    if (key === 'country') {
      const country = SEVICE_DASHBOARD_FILTER_MASTER_DATA.OFFICE.find((office) => office.country === val);
      if (country) {
        dispatch({ type: POST_OFFICE, data: country.offices });
      }
    }
  };

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
      headCellsType={headCellsType}
    />
  );

  const CustomerFilter = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Filters
          components={FILTER_COMPONETS}
          apiUrl="dummyUrl"
          getFilterData={getFilterData}
          getFilterDataPayloadChange={getFilterDataPayloadChange}
        />
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
