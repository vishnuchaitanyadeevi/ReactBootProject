// routes
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment-timezone';
import { ErrorBoundary } from 'react-error-boundary';
import FallBack from './components/errorHandling/FallBack';
import Router from './routes';
// theme
import ThemeConfig from './theme';
// styles
import './Styles/app.scss';
// components
import RtlLayout from './components/RtlLayout';
import Settings from './components/settings';
import ScrollToTop from './components/ScrollToTop';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import { LOCAL_STORAGE_KEYS } from './utils/constants';

const logger = require('./callingLogger');
// ----------------------------------------------------------------------
const { TOKEN_KEY } = LOCAL_STORAGE_KEYS;
export default function App() {
  moment.tz.setDefault('Asia/Kuala_Lumpur');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('username')) {
      // navigate('/home');
      navigate('/addCallOut');
    } else {
      navigate('/login');
    }
    // if (location.pathname === '/login') {
    //   // if (localStorage.getItem(TOKEN_KEY)) navigate('/');
    // }
    // // else if (localStorage.getItem(TOKEN_KEY)) navigate(location);
    // else navigate('/login'); // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {};
  }, []);

  const errorHandler = (error, errorInfo) => {
    logger.error('Something Went Wrong', { meta: errorInfo });
  };

  return (
    <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler} key={location.pathname}>
      <ThemeConfig>
        <ThemePrimaryColor>
          <RtlLayout>
            {/* <Settings /> */}
            <ScrollToTop />
            <Router />
          </RtlLayout>
        </ThemePrimaryColor>
      </ThemeConfig>
    </ErrorBoundary>
  );
}
