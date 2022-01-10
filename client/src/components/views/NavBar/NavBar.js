import React from 'react'
import LeftMenu from './Section/LeftMenu';
import './Section/Navbar.css';
import RightMenu from './Section/RightMenu';

function NavBar() {
    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <div className="menu__logo">
                <a href="/">Youtube</a>
            </div>
            <div className="menu__container">
                <div className="menu_left">
                    <LeftMenu mode="horizontal"/>
                </div>
                <div className="menu_right">
                    <RightMenu mode="horizontal" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
