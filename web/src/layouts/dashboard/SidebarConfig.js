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
        title: 'Master List',
        path: PATH_DASHBOARD.general.service,
        children: [
          { title: 'Customers', path: '/customers' },
          { title: 'Salesman', path: '' },
          { title: 'Servicemen/Technicians', path: '' }
        ]
      },
      {
        title: 'Contracts/Projects',
        path: '',
        children: [
          { title: 'Contracts', path: '/contractsList' },
          // { title: 'Projects', path: '/project/add' },
          { title: 'Service Orders', path: '' },
          { title: 'Project Expiration List', path: '/projectExpiration' },
          { title: 'Terminate Projects', path: '/terminateProject' }
        ]
      },
      {
        title: 'Manage Schedule',
        path: '',
        children: [
          { title: 'Add Call Out', path: '/addCallOut' },
          { title: 'Schedule Services', path: '/dashboard/service' }
        ]
      },
      {
        title: 'Inventory Management',
        path: '',
        children: [
          { title: 'Material Picking List', path: '/data' },
          { title: 'Material and Price List', path: '' },
          { title: 'FOL Installation List', path: '' },
          { title: 'Equipments/Devices', path: '' }
        ]
      },
      {
        title: 'Invoicing',
        path: '',
        children: [
          { title: 'Invoice List', path: '' },
          { title: 'Invoice Overview', path: '' }
        ]
      },
      {
        title: 'Credit Notes',
        path: '',
        children: [
          { title: 'Credit Notes Proposal and Workflow', path: '' },
          { title: 'Credit Control View', path: '' },
          { title: 'Credit Control Coordinator View', path: '' }
        ]
      },
      { title: 'Reports', path: '' },
      { title: 'iPad Synchronization Log', path: '' },
      { title: 'Route Analysis', path: '' },
      { title: 'Manage Questions', path: '' },
      { title: 'Discount Workflow', path: '' },
      { title: 'Equipment Builder', path: '' },
      { title: 'Ax Synchronization', path: '' },
      { title: 'Mobile Warehouse', path: '' },
      { title: 'Salesmen View', path: '' },
      { title: 'Export', path: '' }
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
