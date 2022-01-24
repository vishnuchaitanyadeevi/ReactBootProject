// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Label from '../../components/Label';
import SvgIconStyle from '../../components/SvgIconStyle';
import menuConfig from '../main/MenuConfig';

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
  {
    items: [
      { title: 'dashboard', path: PATH_DASHBOARD.general.home },
      {
        title: 'Administration',
        path: '',
        children: [{ title: 'Country List', path: '/countryList' }]
      },
      {
        title: 'Master List',
        path: PATH_DASHBOARD.general.service,
        children: [
          { title: 'Customers', path: '/customers' },
          { title: 'Salesman', path: '', isPending: true },
          { title: 'Servicemen/Technicians', path: '', isPending: true }
        ]
      },
      {
        title: 'Contracts/Projects',
        path: '',
        children: [
          { title: 'Contracts', path: '/contractsList' },
          // { title: 'Projects', path: '/project/add' },
          { title: 'Service Orders', path: '', isPending: true },
          { title: 'Project Expiration List', path: '/projectExpiration' },
          { title: 'Terminate Projects', path: '/terminateProject' }
        ]
      },
      {
        title: 'Manage Schedule',
        path: '',
        children: [
          { title: 'Add Call Out', path: '/addCallOut' },
          { title: 'Schedule Services', path: '/schedule/service' }
        ]
      },
      {
        title: 'Inventory Management',
        path: '',
        children: [
          { title: 'Material Picking List', path: '/data' },
          { title: 'Material And Price List', path: '', isPending: true },
          { title: 'FOL Installation List', path: '', isPending: true },
          { title: 'Equipments/Devices', path: '', isPending: true }
        ]
      },
      {
        title: 'Invoicing',
        path: '',
        children: [
          { title: 'Invoice List', path: '/invoiceList' },
          { title: 'TableTrial', path: '/tabletrial' },
          { title: 'Invoice Overview', path: '', isPending: true }
        ]
      },
      {
        title: 'Credit Notes',
        path: '',
        children: [
          { title: 'Credit Notes Proposal And Workflow', path: '', isPending: true },
          { title: 'Credit Control View', path: '', isPending: true },
          { title: 'Credit Control Coordinator View', path: '', isPending: true }
        ]
      },
      { title: 'Reports', path: '', isPending: true },
      { title: 'iPad Synchronization Log', path: '', isPending: true },
      { title: 'Route Analysis', path: '', isPending: true },
      { title: 'Manage Questions', path: '', isPending: true },
      { title: 'Discount Workflow', path: '', isPending: true },
      { title: 'Equipment Builder', path: '', isPending: true },
      { title: 'Ax Synchronization', path: '', isPending: true },
      { title: 'Mobile Warehouse', path: '', isPending: true },
      { title: 'Salesmen View', path: '', isPending: true },
      { title: 'Export', path: '', isPending: true }
      /* {
        title: 'Demo',
        path: '',
        children: [
          { title: 'Add_Project', path: '/project/add' },
          { title: 'Add_Contract', path: '/contract/add' },
          { title: 'Contract_List', path: '/contractsList' },
          { title: 'Project_Expiration', path: '/projectExpiration' },
          { title: 'Employee', path: '/employee' },
          { title: 'Data', path: '/data' },
          { title: 'Invoice', path: '/invoice' },
          { title: 'Pay', path: '/pay' },
          { title: 'Components', path: '/components' },
          { title: 'Customers', path: '/customers' },
          { title: 'Add Call Out', path: '/addCallOut' }
        ]
      }
      */
    ]
  }
];

export default sidebarConfig;
