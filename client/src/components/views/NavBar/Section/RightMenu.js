import React, { useState } from 'react'
import { TabMenu } from 'primereact/tabmenu';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { USER_SERVER } from '../../../Config'

function RightMenu() {
    const [activeIndex] = useState(3);
    const user = useSelector(state => state.user)
    let navigate = useNavigate();

    const items = [
        {label: 'Sign In', command: () => { window.location="register" }},
        {label: 'Login', command: () => { window.location="login" }},        
    ];
    const loginitems = [
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
            <div className='card'>
                <TabMenu model={items} activeIndex={activeIndex} />
            </div>
        )
    } else {
        return (
            <div>
                <TabMenu model={loginitems} activeIndex={activeIndex} />
            </div>
        )
    }
    
}

export default RightMenu
