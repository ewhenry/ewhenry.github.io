import React from 'react';
import {
  HashRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import Home from './screens/Home';
import './App.scss';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">HENRYWANDOVER</NavLink>

        </div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;