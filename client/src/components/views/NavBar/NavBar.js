import React, { useState } from 'react'
import LeftMenu from './Section/LeftMenu';
import './Section/Navbar.css';
import RightMenu from './Section/RightMenu';
import { Drawer, Button } from 'antd'

function NavBar() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

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
                <Button
                    className="menu__mobile-button"
                    type="primary"
                    onClick={showDrawer}
                >
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                <LeftMenu mode="inline" />
                <RightMenu mode="inline" />
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar
