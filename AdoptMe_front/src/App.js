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
  useNavigate,
  Route
} from "react-router-dom";
import { Component } from 'react';
import {NotFound} from './components/NotFound';
import {Registration} from './components/Registration'
import { DataChangeAccount } from './components/DataChangeAccount';
import { DataChangeShelter } from './components/DataChangeShelter';
import { Shelters } from './components/Shelters';
import { PetsForShelter } from './components/PetsForShelter';


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
          <Route  from='/account/:id/change_data' to="/account/:id" ><DataChangeAccount/></Route >
          <Route exact path="/shelters/:id"><Shelters/></Route>
          <Route exact path="/shelters/:id/my_pets"><PetsForShelter/></Route>
          <Route path="/shelters/:id/change_data"><DataChangeShelter/></Route>
          <Route path="/register"><Registration /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Router>
    <Footer />
    </div>
  );  
}

export default App;
