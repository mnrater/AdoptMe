import React, { useEffect, useState } from "react";

export const SearchBar = () => {

    return (
        <>
            <form class="search_bar" method="post">
                <div class="search_bar_content">
                    <input class="search_input" type="search" placeholder="Wpisz miasto, z którego szukasz zwierzęcia!" aria-label="Search" name="search_phrase"></input>
                    <button class ="search_button" type ="submit">Szukaj</button>
                </div>
            </form>
        </>
    )
}