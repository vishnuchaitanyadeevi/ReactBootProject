import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Route, useNavigate, useLocation } from 'react-router-dom';
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
  Grid,
  Popover
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { LoadingButton } from '@mui/lab';
import { LOCAL_STORAGE_KEYS, PATTERN, LOGIN_PROPS, ROUTES, STATUS } from '../../../utils/constants';
import { login } from '../../../utils/auth-service';
import { ERRORS, NOTIFICATIONS } from '../../../utils/messages';
import { LoginOtp } from './LoginOtp';
import DialogComponent from '../../Dialog';
// hooks
import useBoolean from '../../../hooks/useBoolean';

const { TOKEN_KEY } = LOCAL_STORAGE_KEYS;
export default function LoginForm() {
  const location = useLocation();
  const { LOGIN_PAGE, FORGOT_USERNAME, FORGOT_PASSWORD, RESET_PASSORD } = LOGIN_PROPS;
  const { USERNAME, ALPHANUMERIC } = PATTERN;
  const defaultView = location?.state?.defaultView || LOGIN_PAGE;
  const {
    PASSWORD_REQUIRED,
    ENTER_VALID_PASSWORD,
    PASSWORD_MINIMUM_8_CHARS,
    CONFIRM_PASSWORD_REQUIRED,
    PASSWORD_MUST_MATCH,
    EMAIL_MUST_VALID_ADDRESS,
    ENTER_YOUR_EMAIL,
    ENTER_YOUR_USERNAME,
    ENTER_VALID_USERNAME,
    USERNAME_REQUIRED
  } = ERRORS;
  const { PASSWORD_RESET_SUCCESS, CHECK_EMAIL_ID } = NOTIFICATIONS;

  const [showPassword, setShowPassword] = useBoolean(false);
  const [showResetPassword, setShowResetPassword] = useBoolean(false);
  const [showResetConfirmPassowrd, setShowResetConfirmPassowrd] = useBoolean(false);
  const [user, setUser] = useState();
  const [servicemenAnchorEl, setServicemenAnchorEl] = useState(null);
  const [view, setView] = useState(defaultView);
  const [otpDialog, setOtpDialog] = useBoolean(false);
  const [dialogOpen, setDialogOpen] = useBoolean(false);
  const [dialogInfo, setDialofInfo] = useState({
    title: STATUS.Success,
    content: CHECK_EMAIL_ID,
    proceedButtonText: 'Ok',
    isCancelButton: false,
    contentProps: { style: { marginBottom: '-2rem', marginTop: '1rem' } }
  });

  const isLoginView = view === LOGIN_PAGE;

  const isForgotUsernameView = view === FORGOT_USERNAME;

  const isForgotPasswordView = view === FORGOT_PASSWORD;

  const isForgotResetPasswordView = view === RESET_PASSORD;

  const servicemenOpen = Boolean(servicemenAnchorEl);

  const toggelPasswordVisibility = () => (showPassword ? setShowPassword.off() : setShowPassword.on());

  const toggelResetPasswordVisibility = () =>
    showResetPassword ? setShowResetPassword.off() : setShowResetPassword.on();

  const toggelResetConfirmPasswordVisibility = () =>
    showResetConfirmPassowrd ? setShowResetConfirmPassowrd.off() : setShowResetConfirmPassowrd.on();

  const navigate = useNavigate();

  const handleServicemenClose = () => setServicemenAnchorEl(null);

  const handleServicemenClick = (e) => {
    setServicemenAnchorEl(e.currentTarget);
    e.stopPropagation();
  };

  const handleCardDialogOpen = () => setDialogOpen.on();

  const handleCardDialogClose = () => {
    setDialogOpen.off();
    if (isForgotResetPasswordView) {
      navigate(ROUTES.LOGIN);
    } else {
      setView(LOGIN_PAGE);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const loginSchema = Yup.object().shape({
    username: Yup.string().required(USERNAME_REQUIRED).matches(USERNAME, ENTER_VALID_USERNAME),
    password: Yup.string().required(PASSWORD_REQUIRED)
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (e) => {
      setOtpDialog.on();
    }
  });

  const forgotIdPwdSchema = Yup.object().shape({
    email: isForgotUsernameView
      ? Yup.string().email(EMAIL_MUST_VALID_ADDRESS).required(ENTER_YOUR_EMAIL)
      : Yup.string().required(ENTER_YOUR_USERNAME).matches(USERNAME, ENTER_VALID_USERNAME)
  });

  const formikForgotIdorPwd = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotIdPwdSchema,
    onSubmit: async (e) => {
      handleCardDialogOpen();
    }
  });

  const ResetPwdSchema = Yup.object().shape({
    password: Yup.string()
      .required(PASSWORD_REQUIRED)
      .matches(ALPHANUMERIC, ENTER_VALID_PASSWORD)
      .min(8, PASSWORD_MINIMUM_8_CHARS),
    confirmPassword: Yup.string()
      .when('password', (password, schema) => {
        if (password) return schema.required(CONFIRM_PASSWORD_REQUIRED);
      })
      .oneOf([Yup.ref('password')], PASSWORD_MUST_MATCH)
  });

  const formikResetPwd = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: ResetPwdSchema,
    onSubmit: async (e) => {
      handleCardDialogOpen();
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

  const {
    errors: errorsR,
    touched: touchedR,
    values: valuesR,
    isSubmitting: isSubmittingR,
    getFieldProps: getFieldPropsR
  } = formikResetPwd;

  const verifyOtp = () => {
    localStorage.setItem('username', 'sanket.test');
    navigate('/home');
  };

  const changeView = (view) => setView(view);

  const handleOtpDialogClose = () => setOtpDialog.off();

  useEffect(() => {
    if (isForgotResetPasswordView) {
      setDialofInfo({ ...dialogInfo, content: PASSWORD_RESET_SUCCESS });
    } else {
      setDialofInfo({ ...dialogInfo, content: CHECK_EMAIL_ID });
    }
  }, [view]);

  return (
    <>
      <DialogComponent
        open={dialogOpen}
        handleClose={handleCardDialogClose}
        handleProceed={handleCardDialogClose}
        title={dialogInfo.title}
        content={dialogInfo.content}
        contentProps={dialogInfo.contentProps}
        proceedButtonText={dialogInfo.proceedButtonText}
        isCancelButton={false}
      />
      <LoginOtp open={otpDialog} handleClose={handleOtpDialogClose} verifyOtp={verifyOtp} />
      {/* <LoginOtp open={otpDialog} /> */}
      <img src="/static/home/rezaLogo.png" alt="reza" style={{ padding: '0 1.1rem 0 1.1rem' }} />
      <img src="/static/home/omslogo.png" alt="oms" />
      {isLoginView && (
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
                        onClick={toggelPasswordVisibility}
                        onMouseDown={toggelPasswordVisibility}
                        size="large"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
              <Link variant="forgotUsername" onClick={() => changeView(FORGOT_USERNAME)}>
                Forgot your Username?
              </Link>
              <Link variant="forgotPassword" onClick={() => changeView(FORGOT_PASSWORD)}>
                Forgot your Password?
              </Link>
            </Stack>
          </Form>
        </FormikProvider>
      )}
      {(isForgotPasswordView || isForgotUsernameView) && (
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
                    onClick={() => changeView(LOGIN_PAGE)}
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
      {isForgotResetPasswordView && (
        <FormikProvider value={formikResetPwd}>
          <Form autoComplete="off" noValidate onSubmit={formikResetPwd.handleSubmit}>
            <Stack spacing={3}>
              <>
                <TextField
                  type={`${showResetPassword ? 'text' : 'password'}`}
                  fullWidth
                  autoComplete="current-password"
                  label="Password"
                  onChange={formikResetPwd.handleChange}
                  {...getFieldPropsR('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleServicemenClick}>
                          <InfoOutlinedIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          onClick={toggelResetPasswordVisibility}
                          onMouseDown={toggelResetPasswordVisibility}
                          size="large"
                        >
                          {showResetPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(touchedR.password && errorsR.password)}
                  helperText={touchedR.password && errorsR.password}
                />
                <Popover
                  id="servicemen"
                  open={servicemenOpen}
                  anchorEl={servicemenAnchorEl}
                  onClose={handleServicemenClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                >
                  <ul style={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
                    <li style={{ padding: '0.2rem 0.5rem 0 0.5rem' }}>
                      <span style={{ marginLeft: '-0.5rem' }}>Be at least eight characters long</span>
                    </li>
                    <li style={{ padding: '0.2rem 0.5rem 0 0.5rem' }}>
                      <span style={{ marginLeft: '-0.5rem' }}>Should be alphanumeric</span>
                    </li>
                    <li style={{ padding: '0.2rem 0.5rem 0 0.5rem' }}>
                      <span style={{ marginLeft: '-0.5rem' }}>No case sensitivity</span>
                    </li>
                    <li style={{ padding: '0.2rem 0.5rem 0 0.5rem' }}>
                      <span style={{ marginLeft: '-0.5rem' }}>
                        No special characters (like &,%, * , =,/ ,_,.) to be used
                      </span>
                    </li>
                    <li style={{ padding: '0.2rem 0.5rem 0 0.5rem' }}>
                      <span style={{ marginLeft: '-0.5rem' }}>Enter and Confirm password should match</span>
                    </li>
                  </ul>
                </Popover>
              </>
              <TextField
                type={`${showResetConfirmPassowrd ? 'text' : 'password'}`}
                fullWidth
                autoComplete="current-password"
                label="Confirm Password"
                onChange={formikResetPwd.handleChange}
                {...getFieldPropsR('confirmPassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={toggelResetConfirmPasswordVisibility}
                        onMouseDown={toggelResetConfirmPasswordVisibility}
                        size="large"
                      >
                        {showResetConfirmPassowrd ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={Boolean(touchedR.confirmPassword && errorsR.confirmPassword)}
                helperText={touchedR.confirmPassword && errorsR.confirmPassword}
              />
              <Grid container>
                <Grid item sm={5.5}>
                  <LoadingButton
                    fullWidth
                    size="large"
                    variant="contained"
                    loading={isSubmittingF}
                    onClick={() => navigate(ROUTES.LOGIN)}
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
                    loading={isSubmittingR}
                    // onClick={handleSendEmail}
                    // disabled={!valuesF.email || errorsF.email}
                  >
                    Reset
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
