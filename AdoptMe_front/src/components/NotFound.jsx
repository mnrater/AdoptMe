import React, { useEffect, useState } from "react";
import './css/NotFound.css'

export const NotFound = () => {

    return (
        <>
        <div class="not_found_communicate">
            <img class="sad_puppy_not_found" src="http://localhost:8080/images/sad_puppy_not_found.png" />
            <h3>#404 - Strona nie znaleziona!</h3>
            <b>Zgubiłeś się? Wróć do </b>
            <a href="/">strony głównej</a>
            <b>.</b>
        </div>
        </>
    )
}