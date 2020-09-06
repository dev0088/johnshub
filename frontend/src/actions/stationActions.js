import * as types from './types';

export function getStations() {
  return {
    type: types.GET_STATIONS.REQUEST,
  };
}

export function getStationsSuccess(payload) {
  return {
    type: types.GET_STATIONS.SUCCESS,
    payload,
  };
}

export function getStationsFailed(payload) {
  return {
    type: types.GET_STATIONS.FAILURE,
    payload,
  };
}

export function refreshStations(payload) {
  return {
    type: types.REFRESH_STATIONS.REQUEST,
    payload,
  };
}

export function refreshStationsSuccess(payload) {
  return {
    type: types.REFRESH_STATIONS.SUCCESS,
    payload,
  };
}

export function refreshStationsFailed(payload) {
  return {
    type: types.REFRESH_STATIONS.FAILURE,
    payload,
  };
}

export function addStation(payload) {
  return {
    type: types.ADD_STATION,
    payload,
  };
}