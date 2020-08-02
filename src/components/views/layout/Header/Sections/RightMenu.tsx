import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { API } from '../../../../../api/callAA';

const renderSignBtn = () => {
    if (false) {
        return <div>
                  <Menu mode="horizontal">
                  <Menu.Item key="user">
                      <Link to="/login" className="link-router" style={{ textDecoration: 'none' }}>
                        {/* [{loggedInUserEmail}] */}
                        "asdasd"
                      </Link>
                  </Menu.Item>
                    {/* <Menu.Item key="logout" onClick={userLogout}> */}
                      <Menu.Item key="logout">
                        <Link to="#" className="link-router" style={{ textDecoration: 'none' }}>Logout</Link>
                      </Menu.Item>
                  </Menu>
              </div>
    } else {
        return <div>
                <Menu mode="horizontal">
                  <Menu.Item key="login">
                    <Link to="/login" className="link-router" style={{ textDecoration: 'none' }}>Signin</Link>
                  </Menu.Item>
                  <Menu.Item key="app">
                    <Link to="/register" className="link-router" style={{ textDecoration: 'none' }}>SignUp</Link>
                  </Menu.Item>
                </Menu>
              </div>
    }
}

const RightMenu : React.FC = (props: any) => {
    // const isLogin = window.sessionStorage.getItem('isLogin');
    // const loggedInUserEmail = window.sessionStorage.getItem('loggedInUserEmail');

    // const userLogout = () => {
    //     API.LOGOUT()
    //     .then(res => {
    //     console.log(res);
    //     if(res.data.code === 'DR00'){
    //         window.sessionStorage.removeItem('isLogin');
    //         window.sessionStorage.removeItem('loggedInUserEmail');
    //         window.location.reload();
    //     }
    //     }).catch(err => {
    //     console.log(err);
    // })

    return (
        <div className="menu_right">
            {renderSignBtn()}
        </div>
    )
}

export default RightMenu;