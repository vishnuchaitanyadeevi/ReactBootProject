export const LOCAL_STORAGE_KEYS = {
  TOKEN_KEY: 'accessToken',
  REFRESH_TOKEN_KEY: 'refreshToken'
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
  AUDIT: 'audit'
};

export const GROUP_BY = {
  SERVICE_MEN: 'servicemen',
  CUSTOMER: 'customer'
};

export const MAX_LANES = 3;
