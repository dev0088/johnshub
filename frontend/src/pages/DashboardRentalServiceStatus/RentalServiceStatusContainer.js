import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { AnalyticsActions } from '../../actions';
import RentalServiceStatusView from './RentalServiceStatusView';

const mapStateToProps = state => ({
  stations: state.stations || {},
  places: state.places || {},
  averageDuration: state.averageDuration || {},
  numbersPerPlace: state.numbersPerPlace || {},
  numbersPerStation: state.numbersPerStation || {},
  rentalAnalytics: state.rentalAnalytics || {},
  timesPerBattery: state.timesPerBattery || {},
  usagePerStationType: state.usagePerStationType || {},
  users: state.users || {},
});

const mapDispatchToProps = dispatch => ({
  analyticsActions: bindActionCreators(AnalyticsActions, dispatch),
});

// export default compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
// )(RentalServiceStatusView);

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RentalServiceStatusView);