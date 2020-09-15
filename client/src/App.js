import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/profile" exact component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
