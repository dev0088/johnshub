import { all } from 'redux-saga/effects'
import analytics from './analyticsSagas';
import station from './stationSagas';
import place from './placeSagas';
import user from './userSagas';

export default function* root() {
  yield all([
    analytics(),
    station(),
    place(),
    user(),
  ])
}
