import './App.css';
import React, { useEffect, useState } from "react";
import {Pets} from './components/Pets'
import {SearchBar} from './components/SearchBar'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Accounts} from './components/Accounts'
import {PetsForAccount} from './components/PetsForAccount'
import { RegistrationLogin } from './components/RegistrationLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';


function App() {

  const [loginRegistrationModalVisibility, setLoginRegistrationModal] = useState(false)

  return (
    <div className="App">
      <Header showLoginRegistrationModal={() => setLoginRegistrationModal(true)} />
      <RegistrationLogin loginRegistrationModalVisibility={loginRegistrationModalVisibility} hideLoginRegistrationModal={() => setLoginRegistrationModal(false)} />
      <Router>
        <Switch>
          <Route path="/"><SearchBar /><Pets /></Route>
          <Route path="/pets"><Pets /></Route>
          <Route exact path="/account/:id"><Accounts /></Route>
          <Route path="/account/:id/my_pets"><PetsForAccount/></Route>
        </Switch>
      </Router>
    <Footer />
    </div>
  );  
}

export default App;
