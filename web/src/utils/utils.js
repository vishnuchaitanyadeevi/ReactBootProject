import moment from 'moment';
import 'moment-timezone';
import { PATTERN, REGX_TYPE } from './constants';

export const setLocalStorageItem = (key, val) => localStorage.setItem(key, val);

export const ageCalculator = (date) => {
  const a = moment(new Date());
  const b = moment(date);

  const years = a.diff(b, 'year');
  b.add(years, 'years');

  const months = a.diff(b, 'months');
  b.add(months, 'months');

  const days = a.diff(b, 'days');
  return { years, months, days };
};

export const convertDate = (yymmdd, centuryCode) => {
  const d = yymmdd; // YYMMDD
  const yy = d.substr(0, 2);
  const mm = d.substr(2, 2);
  const dd = d.substr(4, 2);
  const yyyy = centuryCode === '0' ? `20${yy}` : `19${yy}`;
  return `${yyyy}-${mm}-${dd}`;
};

export const convertUTCToLocal = (date) => {
  if (date) {
    return moment.utc(date).local().format();
  }
  return '';
};

export const mapperFunction = (array) => {
  const mappedArray = array.map((data) => ({ id: data.id, label: data.name }));
  return mappedArray;
};

export const isValidStr = (str, type) => {
  const { NUM } = REGX_TYPE;
  switch (type) {
    case NUM:
      return /^\d+$/.test(str);
    default:
      return false;
  }
};

// Validation patterns
export const isEmail = (str) => !PATTERN.EMAIL.test(str);
export const isPhone = (str) => !PATTERN.PHONE.test(str);
