import { POST_OFFICE, POST_BUSINESS, POST_CONTRACTS, POST_SERVICE_SUBJECT } from '../constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA, TASKS } from '../../components/ServiceBoard/data';

const {
  COUNTRY,
  BUSINESS,
  PROJECT_STATUS,
  STATUS,
  CONTRACT,
  LOCATION,
  SERVICEMAN,
  CALL_OUT_REASONS,
  CUSTOMERS,
  CURRENCYS,
  PROJECTS,
  STOCK_CODES,
  RATIOS
} = SEVICE_DASHBOARD_FILTER_MASTER_DATA;

const initialState = {
  country: COUNTRY,
  office: [],
  business: BUSINESS,
  projectStatus: PROJECT_STATUS,
  status: STATUS,
  contract: CONTRACT,
  location: LOCATION,
  serviceman: SERVICEMAN,
  customers: CUSTOMERS,
  callOutReasons: CALL_OUT_REASONS,
  serviceSubject: [],
  currency: CURRENCYS,
  contracts: [],
  projects: PROJECTS,
  stockCodes: STOCK_CODES,
  ratios: RATIOS,
  tasks: TASKS
};

export default function MasterDataReducer(state = initialState, actions) {
  const { type, data } = actions;
  switch (actions.type) {
    case POST_OFFICE:
      return { ...state, office: data };
    case POST_CONTRACTS:
      return { ...state, contracts: data };
    case POST_SERVICE_SUBJECT:
      return { ...state, serviceSubject: data };
    default:
      return { ...state };
  }
}
