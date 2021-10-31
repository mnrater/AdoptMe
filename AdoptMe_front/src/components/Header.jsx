import React, { useEffect, useState } from "react";
import './css/Header.css'
import Logo from '../photos/logo.png'
import LogoMobile from '../photos/piesioWRamce.png'
import LogoLoginMobile from '../photos/login_logo.png'

export const Header = ({showLoginRegistrationModal}) => {

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
    let isSmallMobile = (width >= 340);

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
                            {/* </div> */}
                            <div class="login_button_container_mobile">
                                {isSmallMobile ? (
                                    <a class="header_link_mobile_login">Zaloguj się</a>
                                ) : (
                                    <img class="log_in_mobile" id="logIn" src={LogoLoginMobile} />
                                )}
                            </div>
                            <img class="logo_mobile" id="img" src={LogoMobile} />
                        </div>
                    </div>
                </header>
            ) : (
                <div class="header_container" id="headerContainer">
                    <header class="header" id="Header">
                        <div class="header_content" id="headerContent">
                            <div class="header_content_top">
                                <a class="header_link_left">Adoptuj</a>
                                <a class="header_link_left">Wspomóż</a>
                                <img class="logo" id="Logo" src={Logo} />
                                <a class="header_link_right">Blog</a>
                                <a class="header_link_right" id="log_in" onClick={() => showLoginRegistrationModal()}>Zaloguj się</a>
                            </div>
                            <div class="header_content_bottom">
                                <h2>Nie możesz kupić miłości, ale możesz ją adoptować!</h2>
                            </div>
                        </div>
                    </header>
                </div>
            )
            }
        </>
    )
}