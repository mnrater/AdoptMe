import React, { useEffect, useState } from "react";
import './css/Footer.css'

export const Footer = () => {

    return (
        <>
            <div className="footer_container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
                <img class="footer_image" src="http://localhost:8080/images/back-removebg.png"></img>
                <div class="footer-dark">
                    <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>Funkcjonalności</h3>
                                    <ul>
                                        <li><a href="#">Adoptuj zwierzę</a></li>
                                        <li><a href="#">Dofinansuj schronisko</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Pomoc</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>Informacje</h3>
                                    <ul>
                                        <li><a href="#">O nas</a></li>
                                        <li><a href="#">Regulamin</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 item text">
                                    <h3>Adoptuj Mnie</h3>
                                    <p>Strona stworzona z miłości do zwierząt. Tutaj masz możliwość dać szansę jednemu z tysięcy zwierząt, które żyją w schroniskach. Nie możesz kupić miłości, ale możesz ją adoptować!</p>
                                </div>
                                <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                            </div>
                            <p class="copyright">Adoptuj Mnie © 2021</p>
                        </div>
                    </footer>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            </div>
        </>
    )
}