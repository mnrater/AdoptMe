import React, { useEffect, useState } from "react";

export const Pets = () => {

    const [appState, setAppState] = useState({ pets: [] })

    useEffect(() => {
        const url = 'http://localhost:8080/pets';
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ pets: response }))
    });

    var yearToPronounceRok = 1;
    var yearsToPronounceLata = [2, 3, 4, 22, 23, 24];

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
                                {(() => {
                                    if (pet.age == yearToPronounceRok) {
                                        return (<b>{pet.age} rok</b>);
                                    }
                                    else {
                                        for (var i in yearsToPronounceLata) {
                                            if (pet.age == yearsToPronounceLata[i]) {
                                                return (<b>{pet.age} lata</b>);
                                            }
                                        }
                                        return (<b>{pet.age} lat</b>);
                                    }
                                })()}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}