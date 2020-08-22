import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store';

import Auth from './containers/Auth'
import Main from './containers/Main'

import Home from './components/Home'

function App(){
  return(
    <Provider store={store}>
      <Router>
        {/* uncomment this when we have an auth component ready with proper auth checks  */}
        {/* <Route name="Auth" component={Auth}>
          <Route name="Signup" path="/signup" component={SignupPage} />
          <Route name="Login Page" path="/login" component={LoginPage} />
        </Route> */}
        <Route name='Main' component={Main}>
          <Route path="/" name="Homepage" component={Home} />
        </Route>
      </Router>
    </Provider>
  )
}

export default App;
