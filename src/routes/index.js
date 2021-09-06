import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
import Login from '../pages/auth/Login';
import MainLayout from '../layouts/main';

// ----------------------------------------------------------------------
const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Dashboard Routes
    {
      path: 'login',
      element: <Login />
    },
    {
      /* path: 'dashboard',
      element: <DashboardLayout />,
      children: [{ path: '', element: <Dashboard /> }] */
    },
    {
      /* path: 'Registration',
      element: <DashboardLayout />,
      children: [
       // { path: '/', element: <Navigate to="/Registration/Express-appointment" replace /> },
       // { path: 'Express-appointment', element: <ExpressRegistration /> },
       // { path: 'Create-appointment', element: <CreateAppointment /> },
        // { path: 'Manage-appointment', element: <ManageAppointment /> }
      ] */
    },
    {
      path: 'Manage-order',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/Manage-order/Dispatch-appointment" replace /> },
       
      ]
    },
    {
      path: '',
      element: <DashboardLayout />,
      children: [{ path: 'Profile', element: <PageFour /> }]
    },
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/home',
      element: <LandingPage />,
     // children: [{ path: '/', element: <Dashboard /> }]
    },
    {
      path: '/employee',
      element: <Employee />,
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const Employee = Loadable(lazy(() => import('../pages/Employee')));
