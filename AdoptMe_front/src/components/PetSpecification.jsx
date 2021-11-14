import React, { useEffect, useState } from "react";
import './css/PetSpecification.css';
import { useParams } from "react-router-dom";

export const PetSpecification = () => {

    const [appState, setAppState] = useState({ pet_data: [] })
    const [appStateShelters, setAppStateShelters] = useState({ shelters: [] })

    const param = useParams();

    useEffect(() => {
        const url = 'http://localhost:8080/shelters';
        fetch(url)
            .then(data => data.json())
            .then(response => setAppStateShelters({ shelters: response }))
    });

    useEffect(() => {
        const urlxd = 'http://localhost:8080/pet/' + param.id;
        fetch(urlxd)
            .then(dataxd => dataxd.json())
            .then(responsexd => setAppState({ pet_data: responsexd }))
    });

    var yearToPronounceRok = 1;
    var yearsToPronounceLata = [2, 3, 4, 22, 23, 24];

    return (
        <>
            <div class="pet_specification_container">
                <div class="pet_specification_content">
                    <div class="pet_specification_content_left">
                        <div class="pet_specification_photo">
                            <img src={appState.pet_data.photo} />
                        </div>
                    </div>
                    <div class="pet_specification_content_right">
                        <div class="pet_specification_basic_data">
                            <h2>{appState.pet_data.name}</h2>
                            {(() => {
                                if (appState.pet_data.age == yearToPronounceRok) {
                                    return (<b>{appState.pet_data.age} rok</b>);
                                }
                                else {
                                    for (var i in yearsToPronounceLata) {
                                        if (appState.pet_data.age == yearsToPronounceLata[i]) {
                                            return (<b>{appState.pet_data.age} lata</b>);
                                        }
                                    }
                                    return (<b>{appState.pet_data.age} lat</b>);
                                }
                            })()}
                            <hr />
                            <div class="pet_specification_basic_data_description">
                                {appState.pet_data.describtion};
                            </div>
                            <hr />
                        </div>
                        <div class="pet_specification_shelter_info">
                            {appStateShelters.shelters.map(shelter => {
                                return (
                                    <>
                                    <div class="pet_specification_shelter_details">
                                        <h3>{shelter.name}</h3>
                                        <b>{shelter.city}</b>
                                        <br/>
                                        <b>{shelter.address}</b>
                                    </div>
                                    <div class="pet_specification_shelter_logo">
                                        <button>Adoptuj!</button>
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}