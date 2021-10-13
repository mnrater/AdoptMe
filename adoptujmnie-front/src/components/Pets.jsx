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
                            <img class="petPhoto" src={pet.photo}></img>
                            <hr></hr>
                            <div class="petName">
                                <b>{pet.name}</b>
                            </div>
                            <div class="petAge">
                                <b>{pet.age} lat</b>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}