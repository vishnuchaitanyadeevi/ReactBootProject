import {
  GET_COUNTRY,
  GET_OFFICE,
  GET_BUSINESS,
  GET_CONTRACT,
  GET_PROJECT_STATUS,
  GET_STATUS,
  GET_LOCATION,
  GET_SERVICEMEN,
  GET_SALESMAN,
  POST_COUNTRY,
  POST_OFFICE,
  POST_BUSINESS,
  POST_CONTRACT,
  POST_PROJECT_STATUS,
  POST_STATUS,
  POST_LOCATION,
  POST_SERVICEMEN,
  POST_SALESMAN
} from '../constants';
import { SEVICE_DASHBOARD_FILTER_MASTER_DATA } from '../../components/ServiceBoard/data';

const { COUNTRY, BUSINESS, PROJECT_STATUS, STATUS, CONTRACT, LOCATION, SERVICEMAN, SALESMAN } =
  SEVICE_DASHBOARD_FILTER_MASTER_DATA;

const initialState = {
  country: COUNTRY,
  office: [],
  business: BUSINESS,
  projectStatus: PROJECT_STATUS,
  status: STATUS,
  contract: CONTRACT,
  location: LOCATION,
  serviceman: SERVICEMAN,
  salesman: SALESMAN
};

export default function MasterDataReducer(state = initialState, actions) {
  const { type, data } = actions;
  switch (actions.type) {
    case GET_COUNTRY:
      return { ...state };
    case GET_OFFICE:
      return { ...state };
    case GET_BUSINESS:
      return { ...state };
    case POST_OFFICE:
      console.log('action: ', actions);
      console.log('updated state: ', { ...state, office: data });
      return { ...state, office: data };
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
    case GET_SALESMAN:
      return { ...state };
    default:
      return { ...state };
  }
}
