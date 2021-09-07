import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, Checkbox, TextField, Paper, Typography, Grid, IconButton, NoSsr  } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
//import LoadingOverlay from 'react-loading-overlay';
import { LocalizationProvider } from '@material-ui/lab';
import { LoadingButton } from '@material-ui/lab';
import { Save } from '@material-ui/icons';
import { DatePicker } from '@material-ui/lab';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/';
import InputLabel from '@material-ui/core/InputLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from '@material-ui/styles/styled';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { CheckCircleOutlined } from '@material-ui/icons';
import { CancelOutlined } from '@material-ui/icons';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import { Tabs } from '@material-ui/core';
import MainNavbar from 'src/layouts/main/MainNavbar';
// adding inputAdornment
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import Signin from './Signin';
import Select from '@material-ui/core/Select';
// import './App.css';

import { Formik, useFormik } from 'formik';
import { values } from 'lodash';

//formik starts

const initialValues = {
  id: '',
  fname: '',
  lname: '',
  doj: '',
  add: '',
  mob: '',
  email: '',
  rating: ''

}


const onSubmit = values => { 
  console.log('Form data', values)
}

// validation
const validate = values => {
  var errors ={}

  if (!values.id)
  {
    errors.id='Required'
  }

  if (!values.fname)
  {
    errors.fname='Required'
  }
   if (!values.lname){
    errors.lname='Required'
  }
  if (!values.doj)
  {
    errors.doj='Required'
  }
   if (!values.add){
    errors.add='Required'
  }
  
  if (!values.mob)
  {
    errors.mob='Required'
  }

   else if (!/^[0-9]{10}$/i.test(values.mob))
  {
    errors.mob='Invalid Mobile Number'
  }
  
  
  
  if (!values.email)
  {
    errors.email='Required'
  }

  if (!values.rating)
  {
    errors.rating='Required'
  }

  
  return errors
  }







const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const marginTop = { marginTop: 10} 
/*
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
*/


function Employee() {

//formik

const formik = useFormik(
  {
  initialValues,
  onSubmit,
  validate
  
  }
  )

// Snackbar Code Starts


//Date Picker
const [value, setValue] = React.useState(null);
//SnackBar
const [open, setOpen] = React.useState(false);
const [loading, setLoading] = React.useState(false);

const handleClick = () => {
  setOpen(true);
  setLoading(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};


// loader
const [loader, setLoader] = React.useState(false);
  const handleLoader = () => {
    setLoader(false);
  };
  const handleToggle = () => {
    setLoader(!loader);
  };




//formik handle change
const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    
  };



function valuetext(value) {
  return `${value}`;
}

  //Snackbar code ends

  
  
  const paperStyle={padding:'30px 20px', width: 300, margin: "20px auto"}

  return (

    <div>
        <center>
      <div>
        
        <Grid >
      <Paper  elevation ={20} style = {paperStyle} >
      <Grid align='center'></Grid>
      <form> 
      <TextField
          id="outlined"
          style={marginTop}
          label="Employee ID"
          // defaultValue=""
          fullWidth
          helperText= {formik.touched.id && formik.errors.id?formik.errors.id:''} 
          error={Boolean(formik.touched.id && formik.errors.id)}
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values.id} 
          name="id"

        />
        <TextField
          id="outlined"
          style={marginTop}
          label="Employee First Name"
          // defaultValue=""
          fullWidth
          helperText= {formik.touched.fname && formik.errors.fname?formik.errors.fname:''} 
          error={Boolean(formik.touched.fname && formik.errors.fname)}
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values.fname}
          name="fname"
        />
        <TextField
          id="outlined"
          style={marginTop}
          label="Employee Last Name"
          // defaultValue=""
          fullWidth
          helperText= {formik.touched.lname && formik.errors.lname?formik.errors.lname:''} 
          error={Boolean(formik.touched.lname && formik.errors.lname)}
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values.lname}
          name="lname"
        />
        <div style={marginTop}>
<LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker
        label="Date of Joining"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField  {...params} />}
      />
    </LocalizationProvider>
    </div>
        <TextField
          id="outlined"
          style={marginTop}
          label="Employee Address"
          // defaultValue=""
          fullWidth
          helperText= {formik.touched.add && formik.errors.add?formik.errors.add:''} 
          error={Boolean(formik.touched.add && formik.errors.add)}
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values.add}
          name="add"



        />
        <TextField
          id="outlined"
          style={marginTop}
          label="Employee Mobile Number"
          // defaultValue=""
          fullWidth
          helperText= {formik.touched.mob && formik.errors.mob?formik.errors.mob:''} 
          error={Boolean(formik.touched.mob && formik.errors.mob)}
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values.mob}
          name="mob"
        />
        <TextField
          id="outlined"
          style={marginTop}
          label="Employee E-mail"
          // defaultValue=""
          fullWidth
          helperText= {formik.touched.email && formik.errors.email?formik.errors.email:''} 
          error={Boolean(formik.touched.email && formik.errors.email)}
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values.email}
          name="email"
        />

<div style={marginTop}>
  <p align="left">Employee Rating</p>
              <Slider
                
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={10}

          





              />
              </div>
        <LoadingButton loading ={loading}
        fullWidth
        loadingPosition="start"
        startIcon={<Save />}
        variant="outlined" onClick={handleClick} style={marginTop}>
        Save Employee Data
        </LoadingButton>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
          Data Saved Successfully!
          </Alert>
        </Snackbar>

        <Button fullWidth variant="outlined" style={marginTop} onClick={handleToggle}>

          Open Page Loader
        </Button>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader }
        onClick={handleLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
          </form>
        </Paper>
        </Grid>
    </div>
    </center>
    </div>
  );
}

export default Employee;
