import { API_BASE_PATH } from '../utils/constants';
import { getData } from '../utils/rest-services';

export const ethnicityList = async () => getData(`${API_BASE_PATH}/api/v1/ethnicity/minlist`);

export const genderList = async () => getData(`${API_BASE_PATH}/api/v1/gender/minlist`);

export const nationalityList = async () => getData(`${API_BASE_PATH}/api/v1/nationality/list`);

export const clinicWardList = async () => getData(`${API_BASE_PATH}/api/v1/clinicward/minlist`);

export const titlePrefixList = async () => getData(`${API_BASE_PATH}/api/v1/titleprefix/minlist`);

export const disciplineList = async () => getData(`${API_BASE_PATH}/api/v1/discipline/minlist`);

export const subDisciplineList = async () => getData(`${API_BASE_PATH}/api/v1/subdiscipline/minlist`);

export const orderStatusList = async () => getData(`${API_BASE_PATH}/api/v1/orderstatus/minlist`);
