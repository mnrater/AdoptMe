import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './css/DataChange.css';
import axios  from "axios";

export const DataChangeShelter = () => {

    const [appState, setAppState] = useState({ shelters: [] })
    const [name, setName] = useState(null);
    const [creationDate, setCreationDate] = useState(null);


    const param = useParams();


    useEffect(() => {
        const url = 'http://localhost:8080/shelters/' + param.id;
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ shelters: response }))
    });

    function test(event) {
        event.preventDefault();
        test2();
    }

    function test2(){
        const data = {};
        data["name"] = name;
        data["creationDate"] = creationDate;

        console.log(data)

        if(data["name"] === null) {
            data["name"] = appState.shelters.name;
        }
        if(data["creationDate"] === null) {
            data["creationDate"] = appState.shelters.creationDate;
        }
        

        console.log(data)

        axios.post('http://localhost:8080/shelters/' + param.id + '/change_data', data)
    }

      

    return (
        <>
        <form id="main_form" method="post" action={"/shelters/" + param.id}>
            <div id="box_datachange">
                <label><h3>Nazwa:</h3></label>
                    <input class="input" id="name" onChange={event => setName(event.target.value)} placeholder={appState.shelters.name}></input>
                <hr ></hr>
                <label><h3>Data utworzenia:</h3></label>
                    <input class="input" type="date" id="creationDate" onChange={event => setCreationDate(event.target.value)}  placeholder={appState.shelters.creationDate}></input>
                    <Link to={"/shelters/" + param.id}>
                    <button id="data_button_shelter" type="button" >Cofnij</button>
                </Link>
                <button id="data_button_shelter" type="submit" onClick={event => test(event)}>Potwierdzam</button>
            </div>
        </form> 
        </>
    )

}