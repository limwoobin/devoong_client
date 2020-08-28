import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToLogin : React.FC = () => {
    return(
        <>
            {
                !window.sessionStorage.getItem('isLogin') && <Redirect to="/login" />
            }
        </>
    )
}

export default RedirectToLogin;
