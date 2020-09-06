import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../actions/types';
import { processRequest } from '../services/api';
import serverUrls from '../config/api';
import { PlaceActions } from '../actions';


export default function* watcher() {
  yield takeLatest(types.GET_PLACES.REQUEST, getPlaces);
}

export function* getPlaces(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/place/all`,
      'GET',
      null
    );
    const data = response.data;
    yield put(PlaceActions.getPlacesSuccess(data));
  } catch(error) {
    yield put(PlaceActions.getPlacesFailed(error))
  }
}