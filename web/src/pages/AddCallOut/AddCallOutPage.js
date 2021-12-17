import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox
} from '@mui/material';
import AutocompleteWidget from '../../components/Autocomplete/autocompletWidget';
import BasicDatePicker from '../../components/pickers/BasicDatePicker';
import SimpleTable from '../../components/table/simpleTable';
import TaskTable from './TaskTable';
import './AddCallOutPage.scss';

function AddCallOutPage() {
  const jsonData = [
    {
      id: 1,
      serviceSubject: 'Service Subject 1',
      taskName: 'Task Name 1',
      note: 'Testing note... 1'
    },
    {
      id: 2,
      serviceSubject: 'Service Subject 2',
      taskName: 'Task Name 2',
      note: 'Testing note... 2'
    }
  ];
  const [taskData, setTaskData] = useState(jsonData);
  const [sparePartData, setSparePartData] = useState([]);
  const [editingRows, setEditingRows] = useState({});

  const columnDataForTask = [
    {
      field: 'serviceSubject',
      header: 'Service Subject',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'taskName',
      header: 'Task Name',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'note',
      header: 'Note',
      editorElement: 'text',
      sortable: true,
      filter: true
    }
  ];

  const columnDataForSparePart = [
    {
      field: 'stockCode',
      header: 'Stock Code',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'description',
      header: 'Description',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'quantity',
      header: 'Quantity',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'ratio',
      header: 'Ratio',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'action',
      header: 'Action',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'discountAmount',
      header: 'Discount Amount',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'unitPrice',
      header: 'Unit Price',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'totalPrice',
      header: 'Total Price',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'errorCode',
      header: 'Error Code',
      editorElement: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'serviceRelatedNote',
      header: 'Service Related Note',
      editorElement: 'text',
      sortable: true,
      filter: true
    }
  ];

  const customerData = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' }
  ];

  return (
    <Grid className="Add_Call_out_main_cls">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Add Call Out
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ backgroundColor: '#c7d2fe' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">General Data</Typography>
        </Grid>
        {/* Form Data Grid section */}
        <Grid item xs={6} sm={4}>
          <AutocompleteWidget options={customerData} label="Customer" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={4}>
          <AutocompleteWidget options={customerData} label="Contract" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={4}>
          <AutocompleteWidget options={customerData} label="Project" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={4}>
          <span style={{ fontSize: '0.7rem' }}>Service Subject:</span>
          <Typography style={{ color: 'rgb(136 137 140)', fontSize: '0.7rem', marginBottom: '1rem' }}>
            Testing Service Subject
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <span style={{ fontSize: '0.7rem' }}>Customer:</span>
          <Typography style={{ color: 'rgb(136 137 140)', fontSize: '0.7rem', marginBottom: '1rem' }}>
            Testing Customer
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <span style={{ fontSize: '0.7rem' }}>Location:</span>
          <Typography style={{ color: 'rgb(136 137 140)', fontSize: '0.7rem', marginBottom: '1rem' }}>
            Testing Location
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BasicDatePicker label="Date" inputFormat="dd-MM-yyyy" views={['year', 'month', 'day']} />
        </Grid>
        <Grid
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          item
          xs={6}
          sm={2}
        >
          <span style={{ fontSize: '0.7rem', marginTop: '-5px' }}>Status:</span>
          <Typography style={{ color: 'rgb(136 137 140)', fontSize: '0.7rem' }}>Call out</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <AutocompleteWidget options={customerData} label="Serviceman" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ fontSize: '0.7rem' }}>
              Payment Type
            </FormLabel>
            <RadioGroup row aria-label="Payment Type" name="radio-buttons-group">
              <FormControlLabel value="Billable" control={<Radio size="small" />} label="Billable" />
              <FormControlLabel value="Non billable" control={<Radio size="small" />} label="Non billable" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField fullWidth label="Service Fee" size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <AutocompleteWidget options={customerData} label="Call Out Reason" disablePortal autoSelect size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField fullWidth label="Notes" size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControlLabel control={<Checkbox size="small" />} label="FOL Replacement" />
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ backgroundColor: '#c7d2fe', marginTop: '0.5rem' }} />
        </Grid>
      </Grid>

      {/* Task Grid Container */}
      <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center">
            Tasks
          </Typography>
        </Grid>
        {/* Tabular layout */}
        {/* <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Typography style={{ textDecoration: 'underline', fontSize: '1rem', cursor: 'pointer' }}>
            Add new task
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <SimpleTable
            rowData={taskData}
            headerData={columnDataForTask}
            paginator
            rowsPerPageOptions={[10, 20, 50, 100]}
            rows={10}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            // editingRows={editingRows}
            dataKey="id"
            editMode="row"
            type="text"
            title="View project"
            editOption
            btnLabel="Add new task"
          />
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: '#c7d2fe', marginTop: '0.8rem' }} />
      {/* Spare parts Grid Container */}
      <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center">
            Spare parts
          </Typography>
        </Grid>
        {/* <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Typography style={{ textDecoration: 'underline', fontSize: '1rem', cursor: 'pointer' }}>Add part</Typography>
        </Grid> */}
        <Grid item xs={12}>
          <SimpleTable
            rowData={sparePartData}
            headerData={columnDataForSparePart}
            paginator
            rowsPerPageOptions={[10, 20, 50, 100]}
            rows={10}
            showGridlines
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="expand"
            size="small"
            editingRows={editingRows}
            dataKey="id"
            editMode="row"
            showActionColumn
            type="text"
            title="View project"
            editOption
            btnLabel="Spare parts"
          />
        </Grid>
      </Grid>
      {/* Button Grid Container */}
      <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
        <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={12} sm={12}>
          <Button style={{ marginLeft: '0.5rem' }} variant="contained" size="small">
            Save
          </Button>
          <Button color="warning" style={{ marginLeft: '0.5rem' }} variant="contained" size="small">
            Back
          </Button>
          <Button color="secondary" style={{ marginLeft: '0.5rem' }} variant="contained" size="small">
            New
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddCallOutPage;
