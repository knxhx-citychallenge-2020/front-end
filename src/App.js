import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AppFooter from './components/AppFooter';
import './App.css';
import 'bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
          </Switch>
          <AppFooter />
        </div>
      </Router>
    )
  }
}

export default App;
