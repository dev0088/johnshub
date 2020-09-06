import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../actions/types';
import { processRequest } from '../services/api';
import serverUrls from '../config/api';
import { AnalyticsActions, StationActions, PlaceActions, UserActions } from '../actions';


export default function* watcher() {
  yield takeLatest(types.GET_RENTAL_ANALYTICS.REQUEST, getRentalAnalytics);
  yield takeLatest(types.GET_RENTAL_TIMES_PER_BATTERY.REQUEST, getTimesPerBattery);
  yield takeLatest(types.GET_RENTAL_NUMBERS_PER_PLACE.REQUEST, getNumbersPerPlace);
  yield takeLatest(types.GET_RENTAL_NUMBERS_PER_STATION.REQUEST, getNumbersPerStation);
  yield takeLatest(types.GET_RENTAL_USAGE_PER_STATION_TYPE.REQUEST, getUsagePerStationType);
  yield takeLatest(types.GET_RENTAL_AVERAGE_DURATION.REQUEST, getAverateDuration);
}

export function* getRentalAnalytics(action) {
  console.log('====== getRentalAnalytics: ', action);
  try {
    // Require stations.
    yield put(StationActions.getStations());
    // Require places.
    yield put(PlaceActions.getPlaces());
    // Require users.
    yield put(UserActions.getUsers());
    // Require times per battery
    yield put(AnalyticsActions.getTimesPerBattery());
    // Require numbers per place
    yield put(AnalyticsActions.getNumbersPerPlace());
    // Require numbers per station
    yield put(AnalyticsActions.getNumbersPerStation());
    // Require usage per station type
    yield put(AnalyticsActions.getUsagePerStationType());
    // Require average duration
    yield put(AnalyticsActions.getAverageDuration());

  } catch(error) {
    yield put(AnalyticsActions.getRentalAnalyticsFailed(error))
  }
}

export function* getTimesPerBattery(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/analytics//analytics/rental_numbers_per_station`,
      'GET',
      null
    );
    const averageDuration = response.data;
    yield put(AnalyticsActions.getTimesPerBatterySuccess(averageDuration));
  } catch(error) {
    yield put(AnalyticsActions.getTimesPerBatteryFailed(error))
  }
}

export function* getNumbersPerPlace(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/analytics/rental_numbers_per_place`,
      'GET',
      null
    );
    const averageDuration = response.data;
    yield put(AnalyticsActions.getNumbersPerPlaceSuccess(averageDuration));
  } catch(error) {
    yield put(AnalyticsActions.getNumbersPerPlaceFailed(error))
  }
}

export function* getNumbersPerStation(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/analytics/rental_numbers_per_station`,
      'GET',
      null
    );
    const averageDuration = response.data;
    yield put(AnalyticsActions.getNumbersPerStationSuccess(averageDuration));
  } catch(error) {
    yield put(AnalyticsActions.getNumbersPerStationFailed(error))
  }
}

export function* getUsagePerStationType(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/analytics/rental_usage_per_station_type`,
      'GET',
      null
    );
    const averageDuration = response.data;
    yield put(AnalyticsActions.getUsagePerStationTypeSuccess(averageDuration));
  } catch(error) {
    yield put(AnalyticsActions.getUsagePerStationTypeFailed(error))
  }
}

export function* getAverateDuration(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/analytics/rental_average_duration`,
      'GET',
      null
    );
    const averageDuration = response.data;
    yield put(AnalyticsActions.getAverageDurationSuccess(averageDuration));
  } catch(error) {
    yield put(AnalyticsActions.getAverageDurationFailed(error))
  }
}