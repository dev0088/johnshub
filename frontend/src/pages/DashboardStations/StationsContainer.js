import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlaceActions, StationActions } from '../../actions';
import StationsView from './StationsView';

const mapStateToProps = state => ({
  stations: state.stations || {},
  places: state.places || {},
});

const mapDispatchToProps = dispatch => ({
  stationActions: bindActionCreators(StationActions, dispatch),
  placeActions: bindActionCreators(PlaceActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StationsView);