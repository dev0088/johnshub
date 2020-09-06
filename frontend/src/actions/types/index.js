const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RECEIVED = 'RECEIVED';
const INIT     = 'INIT';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, RECEIVED, INIT].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

export const GET_RENTAL_TIMES_PER_BATTERY = createRequestTypes('@dashboard/GET_RENTAL_TIMES_PER_BATTERY');
export const GET_RENTAL_NUMBERS_PER_STATION = createRequestTypes('@dashboard/GET_RENTAL_NUMBERS_PER_STATION');
export const GET_RENTAL_NUMBERS_PER_PLACE = createRequestTypes('@dashboard/GET_RENTAL_NUMBERS_PER_PLACE');
export const GET_RENTAL_USAGE_PER_STATION_TYPE = createRequestTypes('@dashboard/GET_RENTAL_USAGE_PER_STATION_TYPE');
export const GET_RENTAL_AVERAGE_DURATION = createRequestTypes('@dashboard/GET_RENTAL_AVERAGE_DURATION');

export const GET_RENTAL_ANALYTICS = createRequestTypes('@dashboard/GET_RENTAL_ANALYTICS');

export const GET_STATIONS = createRequestTypes('@dashboard/GET_STATIONS');
export const REFRESH_STATIONS = createRequestTypes('@dashboard/REFRESH_STATIONS');
export const ADD_STATION = '@dashboard/ADD_STATION';

export const GET_PLACES = createRequestTypes('@dashboard/GET_PLACES');

export const GET_USERS = createRequestTypes('@dashboard/GET_USERS');

