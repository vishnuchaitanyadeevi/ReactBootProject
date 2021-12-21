import { POST_OFFICE, POST_BUSINESS } from '../constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../components/ServiceBoard/data';

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
  SERVICE_SUBJECTS,
  CURRENCYS,
  CONTRACTS,
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
  serviceSubject: SERVICE_SUBJECTS,
  currency: CURRENCYS,
  contracts: CONTRACTS,
  projects: PROJECTS,
  stockCodes: STOCK_CODES,
  ratios: RATIOS
};

export default function MasterDataReducer(state = initialState, actions) {
  const { type, data } = actions;
  switch (actions.type) {
    case POST_OFFICE:
      return { ...state, office: data };
    default:
      return { ...state };
  }
}
