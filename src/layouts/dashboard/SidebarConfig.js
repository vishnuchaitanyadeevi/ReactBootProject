// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard')
};

const sidebarConfig = [
  // APPOINTMENT BOOKING
  // ----------------------------------------------------------------------
  {
    subheader: 'APPOINTMENT BOOKING',
    items: [
      {
        title: 'Registration',
        path: PATH_DASHBOARD.registration.app,
        icon: ICONS.dashboard,
        children: [
          { title: 'Express Registration', path: PATH_DASHBOARD.registration.pageFour },
          { title: 'Create Appointment', path: PATH_DASHBOARD.registration.pageFours },
          { title: 'Manage Appointment', path: PATH_DASHBOARD.registration.pageFourss }
        ]
      },
      {
        title: 'Manage Orders',
        path: PATH_DASHBOARD.Manage_order.root,
        icon: ICONS.dashboard,
        children: [{ title: 'Sample Collection / Dispatch', path: PATH_DASHBOARD.Manage_order.Dispatch }]
      }
    ]
  },

  // ACCOUNT SETTING
  // ----------------------------------------------------------------------
  {
    subheader: 'ACCOUNT SETTING',
    items: [
      {
        title: 'Profile',
        path: PATH_DASHBOARD.profile.Profile,
        icon: ICONS.user
      }
    ]
  }
];

export default sidebarConfig;
