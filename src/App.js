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
  //https://github.com/cnnmon/cnnmon.github.io/blob/master/src/App.js
  //https://tiffanywang.me/#/
  
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