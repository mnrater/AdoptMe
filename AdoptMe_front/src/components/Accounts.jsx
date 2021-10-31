import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './css/Accounts.css'

export const Accounts = () => {

    const [appState, setAppState] = useState({ accounts: [] })
    const [passwordShown, setPasswordShown] = useState(false);

    const param = useParams();
    const data = "./" + param.id + "/change_data";


    useEffect(() => {
        const url = 'http://localhost:8080/account/' + param.id;
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ accounts: response }))
    });

    const showPassword = () => {
        const x = document.getElementById("password")
        if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
          }
        
      };

    return (
        <>
        <div id="main_box">
            <div id="smaller_box">
                <div class="my_adoptions">
                   Moje Adopcje
                   <img class="photo" src={require('../photos/adopcja-psa.jpg')} />
                   <Link to="">
                        <button id="button_adopcje" type="submit" >Przejdź do moich adopcji</button>
                    </Link>
                </div>
            </div> 
            <div id="smaller_box">
                <label><h3>Email:</h3></label>
                <span class="span" id="email">{appState.accounts.email}</span>
                <hr ></hr>
                <label><h3>Hasło:</h3></label>
                <button id="password_button" onClick={() => showPassword()}>Pokaż hasło</button>
                <input class="span" id="password" type="password" value={appState.accounts.password}></input>
                <hr></hr>
                <label><h3>Numer telefonu:</h3></label>
                <span class="span" id="phonenumber" >{"+48 " + appState.accounts.phoneNumber}</span>
                <hr></hr>
                <label><h3>Adres:</h3></label>
                <span class="span" id="adres" >{appState.accounts.address}</span>
                <Link to={data}>
                    <button id="account_button" type="submit" >Zmień dane</button>
                </Link>
            </div> 
            
        </div>
        </>
    )
}