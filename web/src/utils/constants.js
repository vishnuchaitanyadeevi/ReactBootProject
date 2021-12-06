export const LOCAL_STORAGE_KEYS = {
  TOKEN_KEY: 'accessToken',
  REFRESH_TOKEN_KEY: 'refreshToken'
};

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
};

export const API_BASE_PATH = 'https://lims-admin-api.azurewebsites.net';

// Valid upload file type constants
export const VALID_FILE_FORMAT = {
  INVOICES: '.jpg, .jpeg, .png, .gif, .JPEG, .PNG, .JPG,.pdf,.PDF',
  INVOICES_LIST: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'JPEG', 'PNG', 'JPG', 'pdf', 'PDF']
};

export const LANGUAGE_CODES = { EN: 'en', AR: 'ar' };

export const LANGUAGES = [
  { name: 'English', val: LANGUAGE_CODES.EN },
  { name: 'عربي', val: LANGUAGE_CODES.AR } // Arabic
];

export const LANGUAGES_CODES_RTL_ORIENTATION = [LANGUAGE_CODES.AR];

export const SERVICE_TYPES = {
  COMPLETE: 'complete',
  SCHEDULE: 'scheduled',
  NOT_COMPLETE: 'notCompleted',
  CANCELLED: 'cancelled',
  REFILL: 'refill',
  MAINTENANCE: 'maintenance',
  CALL_OUT: 'callOut',
  AUDIT: 'audit',
  GET_PERMIT: 'getPermit',
  PERMIT_RECEIVED: 'permitReceived',
  MORNING_JOB: 'morningJob',
  DAY_JOB: 'dayJob',
  NIGHT_JOB: 'nightJob'
};

export const GROUP_BY = {
  SERVICE_MEN: 'serviceMen',
  CUSTOMER: 'customers'
};

export const MAX_LANES = 10;

export const REGX_TYPE = {
  NUM: 'num'
};

// validations regex
export const PATTERN = {
  EMAIL: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  // PHONE: /^(?!0000000000)(?!000-000-0000)(?:\?1[-.●]?)?\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/
  PHONE: /^\([2-9][\d]{2}\) [\d]{3}-[\d]{4}$/
};
