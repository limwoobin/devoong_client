import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToMain : React.FC = () => {
    return(
        <>
            {
                window.sessionStorage.getItem('isLogin') && <Redirect to="/" />
            }
        </>
    )
}

export default RedirectToMain;
