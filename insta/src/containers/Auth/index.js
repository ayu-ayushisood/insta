import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../actions/auth';

class Auth extends React.Component {

  render() {

    return (
      <div>
        in auth container
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    authReducer: state.authReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

