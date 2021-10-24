import React, { useEffect, useState } from "react";
import './css/RegistrationLogin.css'

export const RegistrationLogin = ({loginRegistrationModalVisibility, hideLoginRegistrationModal}) => {

    const [isLoginRegistrationModalVisible, setLoginRegistrationModalVisibility] = React.useState(loginRegistrationModalVisibility)

    useEffect(() => {
        setLoginRegistrationModalVisibility(loginRegistrationModalVisibility)
      }, [loginRegistrationModalVisibility])
    
    if(isLoginRegistrationModalVisible == false) {
        return null
    }

    return (
        <>
            <div class="registration_login_modal">
                <div class="registration_login_modal_content">
                    <div class="registration_login_modal_header">
                        <h4 class="registration_login_modal_title">Modal title</h4>
                        <div class="registration_login_modal_body">
                            This is modal content
                            <div class="registration_login_modal_footer">
                                <button class="button" onClick={() => hideLoginRegistrationModal()}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}