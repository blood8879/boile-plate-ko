import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { USER_SERVER } from '../../../Config'
import { Menu } from 'antd';

function RightMenu() {
    const [activeIndex] = useState(3);
    const user = useSelector(state => state.user)
    let navigate = useNavigate();

    const items = [
        {label: 'Sign In', command: () => { window.location="register" }},
        {label: 'Login', command: () => { window.location="login" }},        
    ];
    const loginitems = [
        {label: 'Video', command: () => { window.location="video/upload"}},
        {label: 'Logout', command: () => {logoutHandler()}}
    ]

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if (response.status === 200) {
                navigate('/login')
            } else {
                alert('Log Out Failed')
            } 
        });
    };

    if(user.userData && !user.userData.isAuth) {
        return (
            <Menu>
                <Menu.Item key="mail">
                    <a href='/login'>SignIn</a>
                </Menu.Item>
            </Menu>
        )
    } else {
        return (
            <div>
                {/* <TabMenu model={loginitems} activeIndex={activeIndex} /> */}
            </div>
        )
    }
    
}

export default RightMenu
