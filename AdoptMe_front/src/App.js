import './App.css';
import React, { useEffect, useState } from "react";
import {MainPage} from './components/MainPage'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Accounts} from './components/Accounts'
import {PetsForAccount} from './components/PetsForAccount'
import {LoginModal} from './components/LoginModal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';
import {NotFound} from './components/NotFound';
import {Registration} from './components/Registration'


function App() {

  const [loginRegistrationModalVisibility, setLoginRegistrationModalVisibility] = useState(false)

  return (
    <div className="App">
      <Header showLoginRegistrationModal={() => setLoginRegistrationModalVisibility(true)} />
      <LoginModal loginRegistrationModalVisibility={loginRegistrationModalVisibility} hideLoginRegistrationModal={() => setLoginRegistrationModalVisibility(false)} />
      <Router>
        <Switch>
          <Route exact path="/"><MainPage /></Route>
          <Route path="/pets"></Route>
          <Route exact path="/account/:id"><Accounts /></Route>
          <Route path="/account/:id/my_pets"><PetsForAccount/></Route>
          <Route path="/register"><Registration /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Router>
    <Footer />
    </div>
  );  
}

export default App;
