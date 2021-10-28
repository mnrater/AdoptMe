import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Shelters = () => {

    const [appState, setAppState] = useState({ shelters: [] })
    const param = useParams();

    useEffect(() => {
        const url = 'http://localhost:8080/shelters/' + param.id;
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState({ shelters: response }))
    });

    return (
        <>
            <div>
                Nazwa: <b>{appState.shelters.name}</b>
                <br></br>
                Data założenia: <b>{appState.shelters.creationDate}</b>
                <br></br>
            </div>
            
        </>
    )
}