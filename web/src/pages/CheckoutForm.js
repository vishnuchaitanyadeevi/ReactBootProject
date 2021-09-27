import {
  CardElement,
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';
import { ArrowForward } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react';
import './styles.css';
import { DataGrid } from '@material-ui/data-grid';
import { Typography, Button, TextField, Paper, Grid, Alert } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import StripeInput from '../components/StripeInput';

// data grid

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
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
    field: 'amount',
    headerName: 'Amount($)',
    type: 'number',
    width: 150,
    editable: false
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', amount: 10 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', amount: 10 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', amount: 10 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', amount: 10 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', amount: 10 },
  { id: 6, lastName: 'Melisandre', firstName: 'John', amount: 10 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', amount: 10 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', amount: 10 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', amount: 10 }
];
// data grid ends

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' }
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee'
    }
  }
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement)
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:4000/payment', {
          amount: 1000,
          id
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
        }
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  };

  const paperStyle = { padding: '30px 20px', width: 600, margin: '20px auto' };
  const marginTop = { marginTop: 10 };
  return (
    <center>
      <>
        {!success ? (
          <div>
            <Grid>
              <Paper elevation={20} style={paperStyle}>
                <Grid align="center" />
                <form>
                  <Alert severity="info">
                    <div align="left">Contribute $10 for Open Source.</div>
                    <div>Either pay from here or using invoice and get the receipt.</div>
                  </Alert>
                  <Grid item xs={12} />
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Card Number"
                      style={marginTop}
                      fullWidth
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{
                        inputComponent: StripeInput,
                        inputProps: {
                          component: CardNumberElement
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      style={marginTop}
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{
                        inputComponent: StripeInput,
                        inputProps: {
                          component: CardExpiryElement
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} />
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      style={marginTop}
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{
                        inputComponent: StripeInput,
                        inputProps: {
                          component: CardCvcElement
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} />
                  <Grid item xs={12} sm={6}>
                    <LoadingButton
                      loading={loading}
                      loadingPosition="start"
                      startIcon={<ArrowForward />}
                      fullWidth
                      variant="outlined"
                      onClick={handleSubmit}
                      style={marginTop}
                    >
                      Pay
                    </LoadingButton>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            <center>
              <div style={{ height: 400 }}>
                <Typography>
                  Hey, this people have done their part, would you also like to contribute then why think twice!
                </Typography>
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
          </div>
        ) : (
          <Grid>
            <Paper elevation={20} style={paperStyle}>
              <Grid align="center" />
              <Alert severity="success">Your payment is Successful. Thanks for using our service.</Alert>
            </Paper>
          </Grid>
        )}
      </>
    </center>
  );
}
