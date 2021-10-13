import React, { useEffect, useState } from "react";
import './Css/PetsForAccount.css';
import { useParams } from "react-router-dom";

export const PetsForAccount = () => {

    const [appState, setAppState] = useState({ PetsForAccount: [] })

    useEffect(() => {
        const url = 'http://localhost:8080/account/1/my_pets';
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ PetsForAccount: response }))
    });

    return (
        <>
            {appState.PetsForAccount.map(pet => {
                return (
                    <div class="box">
                        <div class="image">
                        Fotografia: <b>{pet.photo}</b>
                        </div>
                        <div class="text">
                            Imię: <b>{pet.name}</b>
                            <br></br>
                            Wiek: <b>{pet.age}</b>
                            <br></br>
                            Typ: <b>{pet.type}</b>    
                        </div>                   
                    </div>
                )
            })}
        </>
    )
}