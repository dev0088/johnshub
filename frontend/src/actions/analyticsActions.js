import * as types from './types';

/** */
export function getRentalAnalytics() {
  return {
    type: types.GET_RENTAL_ANALYTICS.REQUEST,
  };
}

export function getRentalAnalyticsSuccess(payload) {
  return {
    type: types.GET_RENTAL_ANALYTICS.SUCCESS,
    payload,
  };
}

export function getRentalAnalyticsFailed(payload) {
  return {
    type: types.GET_RENTAL_ANALYTICS.FAILURE,
    payload,
  };
}
///////////////////

/** */
export function getTimesPerBattery() {
  return {
    type: types.GET_RENTAL_TIMES_PER_BATTERY.REQUEST,
  };
}

export function getTimesPerBatterySuccess(payload) {
  return {
    type: types.GET_RENTAL_TIMES_PER_BATTERY.SUCCESS,
    payload,
  };
}

export function getTimesPerBatteryFailed(payload) {
  return {
    type: types.GET_RENTAL_TIMES_PER_BATTERY.FAILURE,
    payload,
  };
}
///////////////////

/** */
export function getNumbersPerPlace() {
  return {
    type: types.GET_RENTAL_NUMBERS_PER_PLACE.REQUEST,
  };
}

export function getNumbersPerPlaceSuccess(payload) {
  return {
    type: types.GET_RENTAL_NUMBERS_PER_PLACE.SUCCESS,
    payload,
  };
}

export function getNumbersPerPlaceFailed(payload) {
  return {
    type: types.GET_RENTAL_NUMBERS_PER_PLACE.FAILURE,
    payload,
  };
}
//////////////////////

/** */
export function getNumbersPerStation() {
  return {
    type: types.GET_RENTAL_NUMBERS_PER_STATION.REQUEST,
  };
}

export function getNumbersPerStationSuccess(payload) {
  return {
    type: types.GET_RENTAL_NUMBERS_PER_STATION.SUCCESS,
    payload,
  };
}

export function getNumbersPerStationFailed(payload) {
  return {
    type: types.GET_RENTAL_NUMBERS_PER_STATION.FAILURE,
    payload,
  };
}
////////////////////////

/** */
export function getUsagePerStationType() {
  return {
    type: types.GET_RENTAL_USAGE_PER_STATION_TYPE.REQUEST,
  };
}

export function getUsagePerStationTypeSuccess(payload) {
  return {
    type: types.GET_RENTAL_USAGE_PER_STATION_TYPE.SUCCESS,
    payload,
  };
}

export function getUsagePerStationTypeFailed(payload) {
  return {
    type: types.GET_RENTAL_USAGE_PER_STATION_TYPE.FAILURE,
    payload,
  };
}
///////////////////////////

/** */
export function getAverageDuration() {
  return {
    type: types.GET_RENTAL_AVERAGE_DURATION.REQUEST,
  };
}

export function getAverageDurationSuccess(payload) {
  return {
    type: types.GET_RENTAL_AVERAGE_DURATION.SUCCESS,
    payload,
  };
}

export function getAverageDurationFailed(payload) {
  return {
    type: types.GET_RENTAL_AVERAGE_DURATION.FAILURE,
    payload,
  };
}
///////////////////////////