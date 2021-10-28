import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './css/Account.css'
import { DataChange } from './DataChange';

export const Accounts = () => {

    const [appState, setAppState] = useState({ accounts: [] })

    const param = useParams();
    const data = "./" + param.id + "/change_data";


    useEffect(() => {
        const url = 'http://localhost:8080/account/' + param.id;
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ accounts: response }))
    });

    return (
        <>
        <div id="beczka">
            <div id="account">
                <div class="mojeAdopcje">
                   Moje Adopcje
                   <img class="photo" src={require('../photos/adopcja-psa.jpg')} />
                   <Link to="">
                        <button id="button_adopcje" type="submit" >Przejdź do moich adopcji</button>
                    </Link>
                </div>
            </div> 
            <div id="account">
                <div class="xd">
                    <div class="inputs">
                        <label><h3>Email:</h3></label>
                        <span class="span" id="email">{appState.accounts.email}</span>
                        <hr ></hr>
                        <label><h3>Numer telefonu:</h3></label>
                        <span class="span" id="phonenumber" >{"+48 " + appState.accounts.phoneNumber}</span>
                        <hr></hr>
                        <label><h3>Adres:</h3></label>
                        <span class="span" id="adres" >{appState.accounts.address}</span>
                        <Link to={data}>
                            <button id="button" type="submit" >Zmień dane</button>
                        </Link>
                    </div>
                </div>
            </div> 
            
        </div>
        </>
    )
}