import { useState } from 'react';
import { Navigate } from 'react-router';
import * as Yup from 'yup';
import { Route, useNavigate } from 'react-router-dom';
import { FormikProvider, Form, useFormik } from 'formik';
import { Icon } from '@iconify/react';
import LandingPage from 'src/pages/LandingPage';
import { PATH_PAGE } from 'src/routes/paths';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { LOCAL_STORAGE_KEYS } from '../../../utils/constants';
import { login } from '../../../utils/auth-service';
// hooks
import useIsMountedRef from '../../../hooks/useIsMountedRef';
//styles
//import '../Styles/app.scss';



const { TOKEN_KEY } = LOCAL_STORAGE_KEYS;
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();

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
    onSubmit: () => {
    navigate('/home');
     
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
            fullWidth
            autoComplete="current-password"
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <Icon />
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
