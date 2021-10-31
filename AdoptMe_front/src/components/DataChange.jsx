import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    return (
        <>
        <form id="xd">
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
                    <button id="button" type="submit">Potwierdzam</button>
                </div>
            </div>
        </form> 
        </>
    )
}