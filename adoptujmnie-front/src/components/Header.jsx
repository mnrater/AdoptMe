import React, { useEffect, useState } from "react";
import Logo from '../photos/piesioWRamce.png'
import Logo_text from '../photos/napis-cutout1.png'

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // document.getElementById("header_scroll").style.fontSize = "10px";
        // document.getElementById("img").style.height = "40px";
        // document.getElementById("img").style.width = "40px";
        document.getElementById("header").classList.add("header_small");
        document.getElementById("header").classList.remove("header_big");
    } else {
        // document.getElementById("header_scroll").style.fontSize = "20px";
        // document.getElementById("img").style.height = "80px";
        // document.getElementById("img").style.width = "80px";
        document.getElementById("header").classList.add("header_big");
        document.getElementById("header").classList.remove("header_small");
    }
}

export const Header = () => {
    return (
        <>
            <header id="header" class="header_big">
                <div class="overlay" id="header_scroll">
                    <div class="header_content">
                        <div class="header_content_left">
                            <a class="header_link_left">Adoptuj</a>
                            <a class="header_link_left">Wspomóż</a>
                        </div>
                        <div class="header_content_center">
                            <img class="logo" id="img" src={Logo} />
                            <img class="logo_text" id="img" src={Logo_text} />
                        </div>
                        <div class="header_content_right">
                            <a class="header_link_right">Blog</a>
                            <a class="header_link_right">Zaloguj się</a>
                        </div>
                        <div class="header_content_bottom">
                            <h2>Nie możesz kupić miłości, ale możesz ją adoptować!</h2>
                        </div>
                    </div>
                    {/*
                    <br></br>
                    <br></br>
                    <div class="search-bar">
                        <form>
                            <div class="input-group">
                                <input type="search" placeholder="Wpisz miasto, z którego poszukujesz zwierzęcia!" aria-label="Search" name="search_phrase"></input>
                                <button class="header_link" type="submit">Szukaj</button>
                            </div>
                        </form>
                    </div> */}
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p> */}
                    {/* <br></br>
                    <button class="readmore_button">READ MORE</button> */}
                </div>
            </header>
        </>
    )
}