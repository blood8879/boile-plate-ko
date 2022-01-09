import React from 'react'
import LeftMenu from './Section/LeftMenu';
import './Section/Navbar.css';
import RightMenu from './Section/RightMenu';

function NavBar() {
    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <div>
                <a href="/">Youtube</a>
            </div>
            <div className="menu_left">
                <LeftMenu mode="horizontal" />
            </div>
            <div className="menu_rigth">
                <RightMenu mode="horizontal" />
            </div>
        </nav>
    )
}

export default NavBar
