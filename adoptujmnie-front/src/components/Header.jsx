import React, { useEffect, useState } from "react";
import Logo from '../photos/piesioWRamce.png'

export const Header = () => {
    return (
        <>
            <header>
                <div class="overlay">
                    {/* <h1>Simply The Best</h1> */}
                    <img src={Logo} width='120' height='120'/>
                    {/* <h3>Reasons for Choosing US</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p> */}
                    <br></br>
                    <button>READ MORE</button>
                </div>
            </header>
        </>
    )
}