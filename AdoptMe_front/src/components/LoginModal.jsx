import React, { forwardRef, useEffect, useState, useRef } from "react";
import './css/LoginModal.css'

export const LoginModal = ({ loginRegistrationModalVisibility, hideLoginRegistrationModal }) => {

    const [isLoginRegistrationModalVisible, setLoginRegistrationModalVisibility] = React.useState(loginRegistrationModalVisibility)

    useEffect(() => {
        setLoginRegistrationModalVisibility(loginRegistrationModalVisibility)
    }, [loginRegistrationModalVisibility])

    const ref = useRef(null);
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setLoginRegistrationModalVisibility(false);
            hideLoginRegistrationModal();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });


    if (isLoginRegistrationModalVisible == false) {
        return null
    }

    return (
        <>
            <div class="registration_login_modal">
                <div class="registration_login_modal_content" ref={ref}>
                    <div class="registration_login_modal_header">
                        <h4 class="registration_login_modal_title">Zaloguj się!</h4>
                        <hr />
                    </div>
                    <div class="registration_login_modal_body">
                        <form>
                            <h4 class="username_text">Nazwa użytkownika:</h4>
                            <input type="text" class="username_input" />
                            <h4 class="password_text">Hasło:</h4>
                            <input type="password" class="password_input" />
                            <br />
                            <a class="login_button" onClick={() => hideLoginRegistrationModal()}>Login</a>
                            <hr />
                            <h4 class="other_logins_text">Lub zaloguj się za pomocą:</h4>
                            <div class="col item social"><a class="facebook_login" href="#"><i class="icon ion-social-facebook" id="facebook_icon"></i></a><a class="google_login" href="#"><i class="icon ion-social-google" id="google_icon"></i></a></div>
                            <hr />
                            <b class="no_account_info">Nie masz jeszcze konta? </b>
                            <a class="register_input">Zarejestruj się!</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};