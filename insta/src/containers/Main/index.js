import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../../actions/auth'

class Main extends React.Component {



  render() {

    return (
      <div >
        In here in main
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    authReducer: state.authReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
