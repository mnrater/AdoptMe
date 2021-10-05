import React, { useEffect, useState } from "react";
import Logo from '../photos/logo.png'
import LogoMobile from '../photos/piesioWRamce.png'

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("header_small");
        document.getElementById("header").classList.remove("header_big");
    } else {
        document.getElementById("header").classList.add("header_big");
        document.getElementById("header").classList.remove("header_small");
    }
}

export const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 620);

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {isMobile ? (
                <header id="header_mobile" class="header_mobile">
                    <div class="overlay_mobile" id="header_scroll_mobile">
                        <div class="header_content_mobile">
                            {/* <div class="navigation_menu_mobile"> */}
                            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                            </a>
                            {/* <div class="hidden_links_mobile">
                                    <a class="hidden_header_link_mobile">Adoptuj</a>
                                    <a class="hidden_header_link_mobile">Wspomóż</a>
                                    <a class="hidden_header_link_mobile">Blog</a> */}
                            {/* </div> */}
                            <a class="header_link_mobile_login">Zaloguj się</a>
                            {/* </div> */}
                            <img class="logo_mobile" id="img" src={LogoMobile} />
                        </div>
                    </div>
                </header>
            ) : (
                <header id="header" class="header_big">
                    <div class="overlay" id="header_scroll">
                        <div class="header_content">
                            <div class="header_content_top">
                                <a class="header_link_left">Adoptuj</a>
                                <a class="header_link_left">Wspomóż</a>
                                <img class="logo" id="img" src={Logo} />
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
            )}
        </>
    )
}