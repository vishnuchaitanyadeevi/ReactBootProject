import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Route, useNavigate } from 'react-router-dom';
import { FormikProvider, Form, useFormik } from 'formik';

// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Typography,
  Grid
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { LOCAL_STORAGE_KEYS, PATTERN } from '../../../utils/constants';
import { login } from '../../../utils/auth-service';
import { LoginOtp } from './LoginOtp';
// hooks
import useIsMountedRef from '../../../hooks/useIsMountedRef';

const { TOKEN_KEY } = LOCAL_STORAGE_KEYS;
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();
  const views = { login: 'login', forgotUsername: 'forgotUsername', forgotPwd: 'forgotPwd' };
  const [view, setView] = useState(views.login);
  const [otpDialog, setOtpDialog] = useState(true);

  const isForgotUsernameView = view === views.forgotUsername;

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const loginSchema = Yup.object().shape({
    // username: Yup.string().email('Username must be a valid email address').required('Username is required'),
    username: Yup.string()
      .required('Username is required')
      .matches(PATTERN.USERNAME, 'Please enter only alphanumeric characters with no other characters except . (dot). '),
    password: Yup.string()
      .required('Password is required')
      .matches(PATTERN.ALPHANUMERIC, 'Please enter only alphanumeric characters. ')
      .min(8, 'Password Should be more than 8 digits')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (e) => {
      // alert(JSON.stringify(values, null, 2));
      setOtpDialog(true);
      // navigate('/home');
      /*
      const user = { username, password };
      // send the username and password to the server
      const response = await axios.post('http://localhost:4000/login', user);
      // set the state of the user
      setUser(response.data);
      // store the user in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      */
    }
  });

  const forgotIdPwdSchema = Yup.object().shape({
    email: isForgotUsernameView
      ? Yup.string().email('Email must be a valid email address').required('Enter your email')
      : Yup.string()
          .required('Enter your username')
          .matches(
            PATTERN.USERNAME,
            'Please enter only alphanumeric characters with no other characters except . (dot). '
          )
  });

  const formikForgotIdorPwd = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotIdPwdSchema,
    onSubmit: async (e) => {
      alert('Please check your registered Email ID.');
    }
  });

  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  const {
    errors: errorsF,
    touched: touchedF,
    values: valuesF,
    isSubmitting: isSubmittingF,
    getFieldProps: getFieldPropsF
  } = formikForgotIdorPwd;

  const verifyOtp = () => {
    navigate('/home');
  };

  const changeView = (view) => setView(view);

  const handleOtpDialogClose = () => setOtpDialog(false);

  const sendOtp = () => alert(`OTP sent to registered mobile no. and Email ID`);

  return (
    <>
      <LoginOtp open={otpDialog} handleClose={handleOtpDialogClose} verifyOtp={verifyOtp} resendOtp={sendOtp} />
      {/* <LoginOtp open={otpDialog} /> */}
      <img src="/static/home/rezaLogo.png" alt="reza" style={{ padding: '0 1.1rem 0 1.1rem' }} />
      <img src="/static/home/omslogo.png" alt="oms" />
      {view === views.login ? (
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                autoFocus
                fullWidth
                autoComplete="username"
                type="email"
                label="Username"
                onChange={formik.handleChange}
                {...getFieldProps('username')}
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
              />
              <TextField
                type={showPassword ? 'text' : 'password'}
                fullWidth
                autoComplete="current-password"
                label="Password"
                onChange={formik.handleChange}
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
              <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                Login
              </LoadingButton>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              {/* <FormControlLabel
         control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
         label="Remember me"
       /> */}
              <Link variant="forgotUsername" onClick={() => changeView(views.forgotUsername)}>
                Forgot Your Username?
              </Link>
              <Link variant="forgotPassword" onClick={() => changeView(views.forgotPwd)}>
                Forgot Your Password?
              </Link>
            </Stack>
          </Form>
        </FormikProvider>
      ) : (
        <FormikProvider value={formikForgotIdorPwd}>
          <Typography variant="h5" align="center">
            Forgot your {`${isForgotUsernameView ? 'Username' : 'Password'}`}
          </Typography>
          <Form autoComplete="off" noValidate onSubmit={formikForgotIdorPwd.handleSubmit}>
            <Stack spacing={3}>
              <Typography>
                {`An Email with ${
                  isForgotUsernameView ? 'your username' : 'reset password link'
                } will be sent to your registered Email ID, Please enter ${
                  isForgotUsernameView ? 'registered Email ID.' : 'Username.'
                }`}
              </Typography>
              <TextField
                fullWidth
                autoComplete="email"
                type={`${isForgotUsernameView ? 'email' : 'text'}`}
                label={`${isForgotUsernameView ? 'Email' : 'Username'}`}
                onChange={formikForgotIdorPwd.handleChange}
                {...getFieldPropsF('email')}
                error={Boolean(touchedF.email && errorsF.email)}
                helperText={touchedF.email && errorsF.email}
              />
              <Grid container>
                <Grid item sm={5.5}>
                  <LoadingButton
                    fullWidth
                    size="large"
                    variant="contained"
                    loading={isSubmittingF}
                    onClick={() => changeView(views.login)}
                  >
                    Cancel
                  </LoadingButton>
                </Grid>
                <Grid item sm={1} />
                <Grid item sm={5.5}>
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmittingF}
                    // onClick={handleSendEmail}
                    // disabled={!valuesF.email || errorsF.email}
                  >
                    {isForgotUsernameView ? 'Send Username' : 'Send Reset Link'}
                  </LoadingButton>
                </Grid>
              </Grid>
            </Stack>
          </Form>
        </FormikProvider>
      )}
    </>
  );
}
