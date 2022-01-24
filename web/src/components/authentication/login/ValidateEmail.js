import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Grid, Toolbar, Typography, Container, AppBar as MuiAppBar, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { NOTIFICATIONS } from '../../../utils/messages';
import {
  ROUTES,
  NOTIFICATION_MSG_FORMAT,
  SNACK_BAR_MESSAGE_TYPE,
  LOCAL_STORAGE_KEYS,
  LOGIN_PROPS
} from '../../../utils/constants';
import { clearLocalStorage } from '../../../utils/utils';

// import OpenNotification from '../../../components/Notification';
import OpenNotification from '../../Notification/Notification';

const ValidateEmail = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { accessCode } = useParams();
  const [notification, setNotification] = useState({ ...NOTIFICATION_MSG_FORMAT });
  const handleCloseShowSnackbar = () => setNotification({ ...NOTIFICATION_MSG_FORMAT });
  const { HOME, LOGIN, RESET_PASSWORD } = ROUTES;

  const validateUser = async () => {
    const res = accessCode === 'abcde';
    if (res) {
      // setNotification({
      //   ...notification,
      //   type: SNACK_BAR_MESSAGE_TYPE.SUCCESS,
      //   msg: NOTIFICATIONS.EMAIL_VERIFICATION_SUCCESS,
      //   status: true
      // });
      alert(NOTIFICATIONS.EMAIL_VERIFICATION_SUCCESS);
      navigate(RESET_PASSWORD, { state: { defaultView: LOGIN_PROPS.RESET } }, { replace: true });
    } else {
      // setNotification({
      //   ...notification,
      //   type: SNACK_BAR_MESSAGE_TYPE.ERROR,
      //   msg: 'Invalid access code',
      //   status: true
      // });
      alert(NOTIFICATIONS.PASSWORD_RESET_FAILED);
      redirectToLogin();
    }
  };

  const redirectToLogin = () => navigate(HOME);

  useEffect(() => {
    if (accessCode) {
      clearLocalStorage();
      validateUser();
    } else {
      alert(NOTIFICATIONS.ACCESS_CODE_NOT_FOUND);
      redirectToLogin();
    }
  }, []);

  return (
    <>
      {notification.status && (
        <OpenNotification
          openSnackbar={notification.status}
          onCloseMethod={handleCloseShowSnackbar}
          severityType={notification.type}
          messageData={notification.msg}
        />
      )}
      <Helmet title="Validate User" />
      <Toolbar>
        <Container maxWidth="xl">
          <Grid item xs={12}>
            <Grid style={{ display: 'flex', alignItems: 'center' }}>
              <Grid
                onClick={() => navigate(LOGIN)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <img
                  src="/static/home/rezaLogo.png"
                  alt="reza"
                  style={{ padding: '0 1.1rem 0 1.1rem', cursor: 'pointer' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
      <Grid style={{ minHeight: '100%', height: '100%', padding: '20px' }}>
        {errorMessage ? (
          <>
            <Typography variant="h3" gutterBottom display="inline">
              {errorMessage}
            </Typography>
            <Button variant="contained" className="email_send_resend_btn" onClick={redirectToLogin}>
              Go to login
            </Button>
          </>
        ) : (
          <Typography style={{ color: '#FFF' }} variant="h3" gutterBottom display="inline">
            Loading…
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default ValidateEmail;
