import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// import Home from '../Pages/Home';
import PAGES from '../Pages/index';

const {
  Home,
  LoginPage,
  GamesList,
} = PAGES;

export default class NavigationBar extends Component {
  render() {
    return (
      <Router>
        <ul className="ul-class">
          <li className="li-class">
            <Link to="/">Home</Link>
          </li>
          <li className="li-class">
            <Link to="/login">Login</Link>
          </li>
          <li className="li-class">
            <Link to="/gamesList">Games List</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/gamesList">
            <GamesList />
          </Route>
        </Switch>
      </Router>
    );
  }
}
