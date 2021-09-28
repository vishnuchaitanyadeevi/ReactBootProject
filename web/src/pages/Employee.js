import React from 'react';
import { FormikProvider, Form, useFormik } from 'formik';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Button, TextField, Paper, Grid, Slider } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LoadingOverlay from 'react-loading-overlay';
import { LoadingButton, DatePicker, LocalizationProvider } from '@material-ui/lab';
import { Save } from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import '../Styles/app.scss';
// formik starts

const initialValues = {
  id: '',
  fname: '',
  lname: '',
  doj: '',
  add: '',
  mob: '',
  email: '',
  rating: ''
};

const onSubmit = (values) => {
  console.log('Form data', values);
};

// validation
const validate = (values) => {
  const errors = {};

  if (!values.id) {
    errors.id = 'Required';
  } else if (!/^[0-9]{3}$/i.test(values.id)) {
    errors.id = 'Invalid ID';
  }

  if (!values.fname) {
    errors.fname = 'Required';
  } else if (!/^[a-zA-Z]+$/i.test(values.fname)) {
    errors.fname = 'First Name must contain letters';
  }

  if (!values.lname) {
    errors.lname = 'Required';
  } else if (!/^[a-zA-Z]+$/i.test(values.lname)) {
    errors.lname = 'Last Name must contain letters';
  }

  if (!values.doj) {
    errors.doj = 'Required';
  }

  if (!values.add) {
    errors.add = 'Required';
  }

  if (!values.mob) {
    errors.mob = 'Required';
  } else if (!/^\([2-9][\d]{2}\) [\d]{3}-[\d]{4}$/i.test(values.mob)) {
    errors.mob = 'Invalid Mobile Number (US Format)';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.rating) {
    errors.rating = 'Required';
  }
  return errors;
};

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const marginTop = { marginTop: 10 };

function Employee() {
  // formik

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  // Snackbar Code Starts

  // Date Picker
  const [value, setValue] = React.useState(null);
  // SnackBar
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setLoading(true);
    closeloader();
  };

  const closeloader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
  // formik handle change
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function valuetext(value) {
    return `${value}`;
  }

  // Snackbar code ends
  const paperStyle = { padding: '30px 20px', width: 570 };

  return (
    <div>
      <center>
        <div>
          <Grid>
            <Paper elevation={20} style={paperStyle}>
              <Grid align="center" />
              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                  <Alert severity="info">
                    <div align="left">Fill Employee Details Below</div>
                  </Alert>
                  <Box
                    //  component="form"
                    // sx={{
                    //   '& .MuiTextField-root': { m: 1, width: '25ch' },
                    // }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined"
                        style={marginTop}
                        label="Employee ID"
                        // defaultValue=""
                        fullWidth
                        helperText={formik.touched.id && formik.errors.id ? formik.errors.id : ''}
                        error={Boolean(formik.touched.id && formik.errors.id)}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.id}
                        name="id"
                      />

                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          style={{ width: '100%', maxWidth: '100%', minWidth: '20%', marginTop: 10 }}
                          fullWidth
                          label="Date of Joining"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              style={{ width: '100%', maxWidth: '100%', minWidth: '20%', marginTop: 10 }}
                              {...params}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                  </Box>
                  <Box
                    component="form"
                    // sx={{
                    //   '& .MuiTextField-root': { m: 1, width: '25ch' },
                    // }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined"
                        style={marginTop}
                        label="Employee First Name"
                        // defaultValue=""
                        fullWidth
                        helperText={formik.touched.fname && formik.errors.fname ? formik.errors.fname : ''}
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
                        helperText={formik.touched.lname && formik.errors.lname ? formik.errors.lname : ''}
                        error={Boolean(formik.touched.lname && formik.errors.lname)}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lname}
                        name="lname"
                      />
                    </div>
                  </Box>
                  <Box
                    component="form"
                    // sx={
                    //   { m: 1}
                    // }
                    noValidate
                    autoComplete="off"
                    // align="left"
                  >
                    <div>
                      <TextField
                        id="outlined"
                        style={marginTop}
                        label="Employee Address"
                        // defaultValue=""
                        fullWidth
                        helperText={formik.touched.add && formik.errors.add ? formik.errors.add : ''}
                        error={Boolean(formik.touched.add && formik.errors.add)}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.add}
                        name="add"
                      />
                    </div>
                  </Box>
                  <Box
                    component="form"
                    // sx={{
                    //   '& .MuiTextField-root': { m: 1, width: '25ch' },
                    // }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined"
                        style={marginTop}
                        label="Employee Mobile Number"
                        // defaultValue=""
                        fullWidth
                        helperText={formik.touched.mob && formik.errors.mob ? formik.errors.mob : ''}
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
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name="email"
                      />
                    </div>
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '25ch' }
                    }}
                    noValidate
                    autoComplete="off"
                  >
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
                  </Box>
                  <LoadingButton
                    loading={loading}
                    // disabled={}
                    fullWidth
                    loadingPosition="start"
                    startIcon={<Save />}
                    variant="outlined"
                    onClick={handleClick}
                    style={marginTop}
                  >
                    Save Employee Data
                  </LoadingButton>
                  <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                      Data Saved Successfully!
                    </Alert>
                  </Snackbar>

                  <Button fullWidth variant="outlined" style={marginTop} onClick={handleToggle}>
                    Open Page Loader
                  </Button>
                  <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loader}
                    onClick={handleLoader}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                </Form>
              </FormikProvider>
            </Paper>
          </Grid>
        </div>
      </center>
    </div>
  );
}

export default Employee;
