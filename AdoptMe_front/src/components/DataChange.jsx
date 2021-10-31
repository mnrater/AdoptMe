import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './css/DataChange.css'

export const DataChange = () => {

    const [appState, setAppState] = useState({ accounts: [] })

    const param = useParams();


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
        <form id="main_form">
            <div id="box_datachange">
                <label><h3>Email:</h3></label>
                    <input class="input" id="email" placeholder={appState.accounts.email}></input>
                <hr ></hr>
                <label><h3>Hasło:</h3></label>
                    <button id="password_button" type="button" onClick={() => showPassword()}>Pokaż hasło</button>
                    <input class="input" id="password" type="password" value={appState.accounts.password}></input>
                <hr></hr>
                <label><h3>Numer telefonu:</h3></label>
                    <input class="input" id="phonenumber" placeholder={"+48 " + appState.accounts.phoneNumber}></input>
                <hr></hr>
                <label><h3>Adres:</h3></label>
                    <input class="input" id="adres" placeholder={appState.accounts.address}></input>
                <Link to={"/account/" + param.id}>
                    <button id="data_button" type="submit">Potwierdzam</button>
                </Link>
            </div>
        </form> 
        </>
    )
}