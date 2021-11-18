// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Label from '../../components/Label';
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'home',
        path: PATH_DASHBOARD.general.home,
        icon: ICONS.dashboard
      },
      { title: 'customers', path: PATH_DASHBOARD.general.customers, icon: ICONS.user },
      { title: 'contracts/projects', path: PATH_DASHBOARD.general.contracts, icon: ICONS.analytics },
      { title: 'project expiration list', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
      { title: 'scheduling', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking }
    ]
  },
  {
    subheader: 'material management',
    items: [
      { title: 'Material Picking List', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Materials and price list', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'FOL Material Stats', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Equipments', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking }
    ]
  },
  {
    subheader: 'invoicing',
    items: [
      { title: 'invoicing home', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Invoicing -Overview', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Invoicing -Credit notes Proposal', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Invoicing -Credit notes Workflow', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking }
    ]
  },

  {
    subheader: 'misc',
    items: [
      { title: 'Reports', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'iPad Synchronization Log', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Route Analysis', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Manage Questions', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Discount Workflow', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Equipment Builder', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Ax Synchronization', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Mobile Warehouse', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Salesmen View', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Export', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking }
    ]
  }
];

export default sidebarConfig;
