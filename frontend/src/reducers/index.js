import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ThemeOptions from './ThemeOptions';
import averageDuration from './AverageDuration';
import numbersPerPlace from './NumbersPerPlace';
import numbersPerStation from './NumbersPerStation';
import usagePerStationType from './UsagePerStationType';
import rentalAnalytics from './RentalAnalytics';
import timesPerBattery from './TimesPerBattery';
import stations from './Station';
import places from './Place';
import users from './User';

export default function createRootReducer(history) {
  return combineReducers({
    averageDuration,
    numbersPerPlace,
    numbersPerStation,
    places,
    rentalAnalytics,
    router: connectRouter(history),
    stations,
    timesPerBattery,
    usagePerStationType,
    users,
    ThemeOptions,
  });
}
