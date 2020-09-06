import * as types from './types';

export function getPlaces() {
  return {
    type: types.GET_PLACES.REQUEST,
  };
}

export function getPlacesSuccess(payload) {
  return {
    type: types.GET_PLACES.SUCCESS,
    payload,
  };
}

export function getPlacesFailed(payload) {
  return {
    type: types.GET_PLACES.FAILURE,
    payload,
  };
}
