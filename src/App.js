import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BnetDB from './components/pages/BnetDB';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import UserProfile from './components/pages/UserProfile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={BnetDB} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/user-profile' component={UserProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
