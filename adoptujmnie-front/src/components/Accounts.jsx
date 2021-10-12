import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Accounts = () => {

    const [appState, setAppState] = useState({ accounts: [] })

    useEffect(() => {
        const url = 'http://localhost:8080/account/1';
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ accounts: response }))
    });

    return (
        <>
            <div>
                Email: <b>{appState.accounts.email}</b>
                <br></br>
                Hasło: <b>{appState.accounts.password}</b>
                <br></br>
                Numer telefonu: <b>{appState.accounts.phoneNumber}</b>
                <br></br>
                Adres: <b>{appState.accounts.address}</b>
                <br></br>
            </div>
            
        </>
    )
}