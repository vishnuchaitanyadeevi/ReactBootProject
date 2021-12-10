import { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import * as Yup from 'yup';
import { Route, useNavigate } from 'react-router-dom';
import { FormikProvider, Form, useFormik } from 'formik';
import { Icon } from '@iconify/react';
import axios from 'axios';

// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout
  const handleLogout = () => {
    setUser({});
    setEmail('');
    setPassword('');
    localStorage.clear();
  };

  // login the user
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    // send the email and password to the server
    const response = await axios.post('http://localhost:4000/login', user);
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem('user', JSON.stringify(response.data));
  };
  */

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email,
      password
    },
    validationSchema: LoginSchema,
    onSubmit: async (e) => {
      navigate('/home');
      // navigate('/dashboard/service');
      /* e.preventDefault();
      const user = { email, password };
      // send the email and password to the server
      const response = await axios.post('http://localhost:4000/login', user);
      // set the state of the user
      setUser(response.data);
      // store the user in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      */
    }
  });
  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            onChange={(event) => setEmail(event.target.value)}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            type={showPassword ? 'text' : 'password'}
            fullWidth
            autoComplete="current-password"
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
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
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />
          <Link variant="subtitle2">Forgot password?</Link>
        </Stack>
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
