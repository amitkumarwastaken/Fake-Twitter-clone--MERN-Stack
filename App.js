import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import About from './components/About';
import { loadUser} from './actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  componentDidMount(){
    store.dispatch(loadUser());
  }

  
  
  render() {
    return (
      
      <Router>
        <Switch>
        <Route exact path='/' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/homepage' component={() => (
          this.props.isAuthenticated ? (<Homepage />) : (<Signup />)
        )} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={() => (
          this.props.isAuthenticated ? (<Profile />) : (<Signup />)
        )} />
        </Switch>
      </Router>

    );
  }
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, null)(App);
