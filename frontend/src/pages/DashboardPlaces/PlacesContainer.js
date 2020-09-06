import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlaceActions } from '../../actions';
import PlacesView from './PlacesView';

const mapStateToProps = state => ({
  stations: state.stations || {},
  places: state.places || {},
});

const mapDispatchToProps = dispatch => ({
  placeActions: bindActionCreators(PlaceActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlacesView);