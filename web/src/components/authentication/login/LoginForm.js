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
import { LOCAL_STORAGE_KEYS } from '../../../utils/constants';
import { login } from '../../../utils/auth-service';
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
  const views = { login: 'login', forgotId: 'forgotId', forgotPwd: 'forgotPwd' };
  const [view, setView] = useState(views.login);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // login the user
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post('http://localhost:4000/login', user);
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem('user', JSON.stringify(response.data));
  };
  */

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    // username: Yup.string().email('Username must be a valid email address').required('Username is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email,
      username,
      password
    },
    validationSchema: LoginSchema,
    onSubmit: async (e) => {
      navigate('/home');
      /* e.preventDefault();
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
  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  const changeView = (view) => setView(view);

  const handleSendEmail = () => {
    alert(`${view === views.forgotId ? 'Username ' : 'Password reset link '}sent to ${values.email}`);
  };

  return (
    <FormikProvider value={formik}>
      <img src="/static/home/rezaLogo.png" alt="reza" style={{ padding: '0 1.1rem 0 1.1rem' }} />
      <img src="/static/home/omslogo.png" alt="oms" />
      {view === views.login ? (
        <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Username"
              // onChange={(event) => setUsername(event.target.value)}
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
              // onChange={(event) => setPassword(event.target.value)}
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
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!values.username || errors.username || !values.password || errors.password}
            >
              Login
            </LoadingButton>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            {/* <FormControlLabel
         control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
         label="Remember me"
       /> */}
            <Link variant="forgotId" onClick={() => changeView(views.forgotId)}>
              Forgot Your ID?
            </Link>
            <Link variant="forgotPassword" onClick={() => changeView(views.forgotPwd)}>
              Forgot Your Password?
            </Link>
          </Stack>
        </Form>
      ) : (
        <Stack spacing={3}>
          <Typography>
            {view === views.forgotId
              ? 'If you forgot your ID an email with a username ID will be sent to you. Please enter register email ID.'
              : 'If you forgot your password an email with a password will be sent to you. Click on the link in that email and you will be taken to page where you can the create a new password.'}
          </Typography>
          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email"
            // onChange={(event) => setEmail(event.target.value)}
            onChange={formik.handleChange}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <Grid container>
            <Grid item sm={5.5}>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                onClick={handleSendEmail}
                disabled={!values.email || errors.email}
              >
                {view === views.forgotId ? 'Send Username' : 'Send Reset Link'}
              </LoadingButton>
            </Grid>
            <Grid item sm={1} />
            <Grid item sm={5.5}>
              <LoadingButton
                fullWidth
                size="large"
                variant="contained"
                loading={isSubmitting}
                onClick={() => changeView(views.login)}
              >
                Cancel
              </LoadingButton>
            </Grid>
          </Grid>
        </Stack>
      )}
    </FormikProvider>
  );
}
