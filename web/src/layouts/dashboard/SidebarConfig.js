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
      { title: 'Material Picking List', path: PATH_DASHBOARD.general.booking, icon: ICONS.cart },
      { title: 'Materials and price list', path: PATH_DASHBOARD.general.booking, icon: ICONS.ecommerce },
      { title: 'FOL Material Stats', path: PATH_DASHBOARD.general.booking, icon: ICONS.kanban },
      { title: 'Equipments', path: PATH_DASHBOARD.general.booking, icon: ICONS.ecommerce }
    ]
  },
  {
    subheader: 'invoicing',
    items: [
      { title: 'invoicing home', path: PATH_DASHBOARD.general.booking, icon: ICONS.ecommerce },
      { title: 'Invoicing -Overview', path: PATH_DASHBOARD.general.booking, icon: ICONS.analytics },
      { title: 'Credit notes Proposal & Workflow', path: PATH_DASHBOARD.general.booking, icon: ICONS.banking }
    ]
  },
  {
    subheader: 'crdit',
    items: [
      { title: 'credit note list', path: PATH_DASHBOARD.general.booking, icon: ICONS.ecommerce },
      { title: 'credit control view', path: PATH_DASHBOARD.general.booking, icon: ICONS.analytics },
      { title: 'credit control co-ordinator view', path: PATH_DASHBOARD.general.booking, icon: ICONS.analytics }
    ]
  },

  {
    subheader: 'misc',
    items: [
      { title: 'Reports', path: PATH_DASHBOARD.general.booking, icon: ICONS.analytics },
      { title: 'iPad Synchronization Log', path: PATH_DASHBOARD.general.booking, icon: ICONS.kanban },
      { title: 'Route Analysis', path: PATH_DASHBOARD.general.booking, icon: ICONS.analytics },
      { title: 'Manage Questions', path: PATH_DASHBOARD.general.booking, icon: ICONS.kanban },
      { title: 'Discount Workflow', path: PATH_DASHBOARD.general.booking, icon: ICONS.ecommerce },
      { title: 'Equipment Builder', path: PATH_DASHBOARD.general.booking, icon: ICONS.banking },
      { title: 'Ax Synchronization', path: PATH_DASHBOARD.general.booking, icon: ICONS.dashboard },
      { title: 'Mobile Warehouse', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      { title: 'Salesmen View', path: PATH_DASHBOARD.general.booking, icon: ICONS.user },
      { title: 'Export', path: PATH_DASHBOARD.general.booking, icon: ICONS.kanban }
    ]
  }
];

export default sidebarConfig;
