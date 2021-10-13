import React, { useEffect, useState } from "react";

export const Pets = () => {

    const [appState, setAppState] = useState({ pets: [] })

    useEffect(() => {
        const url = 'http://localhost:8080/pets';
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ pets: response }))
    });

    return (
        <>
            <div class="pet_container">
                {appState.pets.map(pet => {
                    return (
                        <div class="pet">
                            Imię: <b>{pet.name}</b>
                            <br></br>
                            Wiek: <b>{pet.age}</b>
                            <br></br>
                            Typ: <b>{pet.type}</b>
                            <br></br>
                            Fotografia: <b>{pet.photo}</b>
                            <br></br>
                        </div>
                    )
                })}
            </div>
        </>
    )
}