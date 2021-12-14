import {
  GET_COUNTRY,
  GET_OFFICE,
  GET_BUSINESS,
  GET_CONTRACT,
  GET_PROJECT_STATUS,
  GET_STATUS,
  GET_LOCATION,
  GET_SERVICEMEN,
  POST_COUNTRY,
  POST_OFFICE,
  POST_BUSINESS,
  POST_CONTRACT,
  POST_PROJECT_STATUS,
  POST_STATUS,
  POST_LOCATION,
  POST_SERVICEMEN
} from '../constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../components/ServiceBoard/data';

const { COUNTRY, OFFICE, BUSINESS, PROJECT_STATUS, STATUS, CONTRACT, LOCATION, SERVICEMEN } =
  SEVICE_DASHBOARD_FILTER_MASTER_DATA;

const initialState = {
  country: COUNTRY,
  office: OFFICE,
  business: BUSINESS,
  projectStatus: PROJECT_STATUS,
  status: STATUS,
  contract: CONTRACT,
  location: LOCATION,
  servicemen: SERVICEMEN
};

export default function MasterDataReducer(state = initialState, actions) {
  switch (actions.type) {
    case GET_COUNTRY:
      return { ...state };
    case GET_OFFICE:
      return { ...state };
    case GET_BUSINESS:
      return { ...state };
    case GET_CONTRACT:
      return { ...state };
    case GET_PROJECT_STATUS:
      return { ...state };
    case GET_STATUS:
      return { ...state };
    case GET_LOCATION:
      return { ...state };
    case GET_SERVICEMEN:
      return { ...state };
    default:
      return { ...state };
  }
}
