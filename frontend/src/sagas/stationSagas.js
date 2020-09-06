import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../actions/types';
import { processRequest } from '../services/api';
import serverUrls from '../config/api';
import { StationActions } from '../actions';


export default function* watcher() {
  yield takeLatest(types.GET_STATIONS.REQUEST, getStations);
  yield takeLatest(types.REFRESH_STATIONS.REQUEST, refreshStations);
}

export function* getStations(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/station/all`,
      'GET',
      null
    );
    const data = response.data;
    yield put(StationActions.getStationsSuccess(data));
  } catch(error) {
    yield put(StationActions.getStationsFailed(error))
  }
}

export function* refreshStations(action) {
  try {
    // Get average duration.
    const response = yield call(
      processRequest,
      `${serverUrls.apiGatewayServerURL}/rental/cabinet_list`,
      'POST',
      null
    );
    const data = response.data;
    console.log('===== cabinet_list: ', data)

    if (data && data.stationSnList) {  
      for (let [key, value] of Object.entries(data.stationSnList)) {
        const stationSn = value.stationSn;
        console.log('==== stationSn: ', stationSn)
        const response = yield call(
          processRequest,
          `${serverUrls.apiGatewayServerURL}/rental/cabinet_info`,
          'POST',
          { stationSn: stationSn }
        );
        
        if (response.data && response.data.body && response.data.body[0]) {
          const station = response.data.body[0];
          yield put(StationActions.addStation(station));
        }
        setTimeout(() => { console.log("delay!"); }, 1000);
      }
      yield put(StationActions.refreshStationsSuccess());
    }
    else yield put(StationActions.refreshStationsFailed());
    
  } catch(error) {
    console.log('===== error: ', error)
    yield put(StationActions.refreshStationsFailed(error))
  }
}