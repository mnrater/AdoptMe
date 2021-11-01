import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './css/DataChangeAccount.css'

export const DataChangeShelter = () => {

    const [appState, setAppState] = useState({ shelters: [] })

    const param = useParams();

    const emptyItem = {
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
    };


    useEffect(() => {
        const url = 'http://localhost:8080/shelters/' + param.id;
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ shelters: response }))
    });

    const showPassword = () => {
        const x = document.getElementById("password")
        if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
          }
        
      };
      

    return (
        <>
        <form id="main_form" method="post" action={"/shelters/" + param.id}>
            <div id="box_datachange">
                <label><h3>Nazwa:</h3></label>
                    <input class="input" id="email" placeholder={appState.shelters.name}></input>
                <hr ></hr>
                <label><h3>Data utworzenia:</h3></label>
                    <input class="input" id="adres"  placeholder={appState.shelters.creationDate}></input>
                <Link to={"/shelters/" + param.id}>
                    <button id="data_button" type="submit">Potwierdzam</button>
                </Link>
            </div>
        </form> 
        </>
    )

}