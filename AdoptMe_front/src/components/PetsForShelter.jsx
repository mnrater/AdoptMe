import React, { useEffect, useState } from "react";
import './css/MainPage.css';
import { useParams } from "react-router-dom";

export const PetsForShelter = () => {

    const [appState, setAppState] = useState({ petsForShelters: [] })

    const param = useParams();

    useEffect(() => {
        const url = 'http://localhost:8080/shelters/'+param.id+'/my_pets';
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ petsForShelters: response }))
    });

    var yearToPronounceRok = 1;
    var yearsToPronounceLata = [2, 3, 4, 22, 23, 24];

    return (
        <>
            <div class="pet_container">
                {appState.petsForShelters.map(pet => {
                    return (
                        <div class="pet">
                            <img class="pet_photo" src={pet.photo} alt=""></img>
                            <hr></hr>
                            <div class="pet_mame">
                                <b>{pet.name}</b>
                            </div>
                            <div class="pet_age">
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