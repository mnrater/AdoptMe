import './App.css';
import {Pets} from './components/Pets'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Accounts} from './components/Accounts'
import {PetsForAccount} from './components/PetsForAccount'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/pets"><Pets /></Route>
          <Route exact path="/account/:id"><Accounts /></Route>
          <Route path="/account/:id/my_pets"><PetsForAccount/></Route>
        </Switch>
      </Router>
    <br></br>
    <Footer></Footer>
    </div>
  );  
}

export default App;
