import React, { useEffect, useState } from "react";
import './css/MainPage.css'

export const MainPage = () => {

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
            <div class="wraper">
                <div class="content">
                    <form class="search_bar" method="post">
                        <div class="search_bar_content">
                            <input class="search_input" type="search" placeholder="Wpisz miasto, z którego szukasz zwierzęcia!" aria-label="Search" name="search_phrase"></input>
                            <a class="search_button">Szukaj</a>
                        </div>
                    </form>
                    <div class="pet_container">
                        {appState.pets.map(pet => {
                            return (
                                <div class="pet">
                                    <a href={"pet/" + pet.id}>
                                        <img class="pet_photo" src={pet.photo}></img>
                                    </a>
                                    <hr></hr>
                                    <div class="pet_name">
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
                </div>
            </div>
        </>
    )
}