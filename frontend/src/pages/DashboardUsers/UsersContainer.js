import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActions } from '../../actions';
import UsersView from './UsersView';

const mapStateToProps = state => ({
  stations: state.stations || {},
  places: state.places || {},
  users: state.users || {},
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(UserActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersView);