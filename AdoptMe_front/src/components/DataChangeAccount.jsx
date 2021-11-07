import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import './css/DataChange.css'; 

export const DataChangeAccount = () => {

    const [appState, setAppState] = useState({ accounts: [] });
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);

    const param = useParams();
    const hisotry = useHistory();

    useEffect(() => {   
        const url = 'http://localhost:8080/account/' + param.id;
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ accounts: response }))
    });

    function test(event) {
        event.preventDefault();
        test2();
    }

    function test2(){
        const data = {};
        data["email"] = email;
        data["password"] = password;
        data["phoneNumber"] = phoneNumber;
        data["address"] = address;

        console.log(data)

        if(data["email"] === null) {
            data["email"] = appState.accounts.email;
        }
        if(data["password"] === null) {
            data["password"] = appState.accounts.password;
        }
        if(data["phoneNumber"] === null) {
            data["phoneNumber"] = appState.accounts.phoneNumber;
        }
        if(data["address"] === null) {
            data["address"] = appState.accounts.address;
        }

        console.log(data)

        axios.post('http://localhost:8080/account/' + param.id + '/change_data', data)
    }
      

    // onSubmit={hisotry.push('/account/' + param.id)}
    return ( 
        <>
        <form id="main_form" method="post">
            <div id="box_datachange">
                <label><h3>Email:</h3></label>
                    <input class="input" id="email" placeholder={appState.accounts.email} onChange={event => setEmail(event.target.value)} ></input>
                <hr ></hr>
                <label><h3>Hasło:</h3></label>
                    <input class="input" id="password" type="password" onChange={event => setPassword(event.target.value)}></input>
                <hr></hr>
                <label><h3>Numer telefonu:</h3></label>
                    <input class="input" id="phonenumber"  placeholder={"+48 " + appState.accounts.phoneNumber} onChange={event => setPhoneNumber(event.target.value)}></input>
                <hr></hr>
                <label><h3>Adres:</h3></label>
                    <input class="input" id="adres"  placeholder={appState.accounts.address} onChange={event => setAddress(event.target.value)}></input>
                <Link to={"/account/" + param.id}>
                    <button id="data_button_account" type="button" >Cofnij</button>
                </Link>
                <button id="data_button_account" type="submit" onClick={event => test(event)}>Potwierdzam</button>
            </div>
        </form> 
        </>
    )

}

