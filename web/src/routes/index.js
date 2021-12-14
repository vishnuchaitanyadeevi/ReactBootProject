import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import ContractsCreation from '../pages/contracts/ContractsCreation';
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
        {
          path: '/Manage-order/Dispatch-appointment',
          element: <Navigate to="/Manage-order/Dispatch-appointment" replace />
        }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/home',
          element: <LandingPage />
        },
        {
          path: '/employee',
          element: <Employee />
        },
        {
          path: '/data',
          element: <Data />
        },
        {
          path: '/invoice',
          element: <Invoice />
        },
        {
          path: '/pay',
          element: <StripeContainer />
        },
        {
          path: '/components',
          element: <ComponentsPage />
        },
        {
          path: '/dashboard/service',
          element: <ServiceDashboardPage />
        },
        {
          path: '/contract/add',
          element: <ContractsCreation />
        },
        {
          path: '/contract/edit/:id',
          element: <ContractsCreation />
        },
        {
          path: '/project/add',
          element: <ProjectCreationPage />
        },
        {
          path: '/project/edit/1',
          element: <ProjectCreationPage />
        },
        {
          path: '/contractsList',
          element: <ContractListPage />
        },
        {
          path: '/projectExpiration',
          element: <ProjectExpirationPage />
        },
        {
          path: '/customers',
          element: <Customers />
        },
        {
          path: '/addCallOut',
          element: <AddCallOutPage />
        }
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
    /* {
      path: '/home',
      element: <LandingPage />
      // children: [{ path: '/', element: <Dashboard /> }]
    },
    {
      path: '/employee',
      element: <Employee />
    },
    {
      path: '/data',
      element: <Data />
    },
    {
      path: '/invoice',
      element: <Invoice />
    },
    {
      path: '/pay',
      element: <StripeContainer />
    },
    {
      path: '/components',
      element: <ComponentsPage />
    },
    */
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
const Data = Loadable(lazy(() => import('../pages/Data')));
const Invoice = Loadable(lazy(() => import('../pages/Invoice')));
const StripeContainer = Loadable(lazy(() => import('../pages/StripeContainer')));
const ComponentsPage = Loadable(lazy(() => import('../pages/ComponentsPage')));
const ProjectCreationPage = Loadable(lazy(() => import('../pages/ProjectCreation/ProjectCreation')));
const ContractListPage = Loadable(lazy(() => import('../pages/contracts/ContractList')));
const ProjectExpirationPage = Loadable(lazy(() => import('../pages/ProjectExpiration/ProjectExpiration')));
const Customers = Loadable(lazy(() => import('../pages/Customers')));
const AddCallOutPage = Loadable(lazy(() => import('../pages/AddCallOut/AddCallOutPage')));
const ServiceDashboardPage = Loadable(lazy(() => import('../pages/ServiceDashboardPage')));
