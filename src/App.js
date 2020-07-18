import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
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
          </Switch>
          <AppFooter />
        </div>
      </Router>
    )
  }
}

export default App;
