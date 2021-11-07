import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';
import './css/Accounts.css'


export const Shelters = () => {

    const [appState, setAppState] = useState({ shelters: [] })
    const param = useParams();

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
        
      }
      
    return (
        <>
        <div id="main_box">
            <div id="smaller_box">
                <div class="my_adoptions">
                   Moje Adopcje
                   <img class="photo" src={require('../photos/adopcja-psa.jpg')} />
                   <Link to="">
                        <button id="button_adopcje" type="submit" >Przejdź do moich adopcji</button>
                    </Link>
                </div>
            </div> 
            <div id="smaller_box">
                <label><h3>Nazwa:</h3></label>
                <span class="span" id="email">{appState.shelters.name}</span>
                <hr ></hr>
                <label><h3>Data utworzenia:</h3></label>
                <span class="span" id="adres" >{appState.shelters.creationDate}</span>
                <Link to={"/shelters/" + param.id + "/change_data"}>
                    <button id="shelter_button" type="submit" >Zmień dane</button>
                </Link>
            </div> 
            
        </div>
        </>
    )
}