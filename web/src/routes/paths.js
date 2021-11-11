// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}
const ROOTS_AUTH = '/auth';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components',
  landingPage: '/home',
  employee: '/employee',
  StripeContainer: '/pay',
  Data: '/data',
  Invoice: '/invoice'
};

const ROOTS_DASHBOARD = '';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  registration: {
    /* app: path(ROOTS_DASHBOARD, '/Registration'),
    pageFour: path(ROOTS_DASHBOARD, '/Registration/Express-appointment'),
    pageFours: path(ROOTS_DASHBOARD, '/Registration/Create-appointment'),
    pageFourss: path(ROOTS_DASHBOARD, '/Registration/Manage-appointment')
    */
  },
  Manage_order: {
    /*
    root: path(ROOTS_DASHBOARD, '/Manage-order'),
    Dispatch: path(ROOTS_DASHBOARD, '/Manage-order/Dispatch-appointment'),
    Order: path(ROOTS_DASHBOARD, '/Manage-order/Order-appointment')
    */
  },
  profile: {
    Profile: path(ROOTS_DASHBOARD, '/Profile')
  }
};
