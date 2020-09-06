import * as types from '../actions/types';

const initialState = {
  init: true,
  isFetching: false,
  isFetched: false,
  errorMessage: false,
  isFailure: false,
  value: []
};

const actionType = types.GET_STATIONS;
const refreshActionType = types.REFRESH_STATIONS;
const addActionType = types.ADD_STATION;

export default function getStationReducer(state = initialState, action) {
  switch(action.type) {
    case actionType.INIT:
      return Object.assign({}, state, {
        init: true,
        isFetched: false,
        errorMessage: false,
        isFailure: false,
        isFetching: false,
        value: []
      });
    case actionType.SUCCESS:
      return Object.assign({}, state, {
        init: false,
        isFetched: true,
        isFailure: false,
        errorMessage: false,
        isFetching: false,
        value: action.payload,
      });
    case actionType.FAILURE:
      return Object.assign({}, state, {
        init: false,
        isFetched: false,
        failure: true,
        isFetching: false,
        errorMessage: action.payload,
      });
    case refreshActionType.REQUEST:
      return Object.assign({}, state, {
        init: true,
        isFetched: false,
        errorMessage: false,
        isFailure: false,
        isFetching: true,
      });
    case refreshActionType.SUCCESS:
      return Object.assign({}, state, {
        init: false,
        isFetched: true,
        isFailure: false,
        isFetching: false,
        errorMessage: false,
      });
    case refreshActionType.FAILURE:
      return Object.assign({}, state, {
        init: false,
        isFetched: false,
        failure: true,
        isFetching: false,
        errorMessage: action.payload,
      });
    case addActionType:
      const stations = state.value;
      var index = stations.length > 0 ?
        stations.findIndex((s) => s.stationSn === action.payload.stationSn) :
        -1 ;
      console.log('===== index: ', index);
      if (index > -1) {
        console.log('===== Removing previous station: ');
        stations.splice(index, 1);
      }
      console.log('===== Adding this station: action.payload.station: ', action.payload.station);
      stations.push(action.payload)
      return Object.assign({}, state, {
        ...state,
        value: stations
      });
    default:
      return state;
  }
}