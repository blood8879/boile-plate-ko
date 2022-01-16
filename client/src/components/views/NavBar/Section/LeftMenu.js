import React from 'react'
import { Menu } from 'antd';
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href='/'>Home</a>
            </Menu.Item>
            <SubMenu key="sub1" title="Blogs">
                <MenuItemGroup title="Item1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item2">
                    <Menu.Item key="setting:3">Option 1</Menu.Item>
                    <Menu.Item key="setting:4">Option 2</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
        </Menu>
    )
}

export default LeftMenu
