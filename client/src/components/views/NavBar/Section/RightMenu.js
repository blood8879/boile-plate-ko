import React, { useState } from 'react'
import { TabMenu } from 'primereact/tabmenu';

function RightMenu() {
    const [activeIndex] = useState(3);

    const items = [
        {label: 'Sign In', command: () => { window.location="register" }},
        {label: 'Login', command: () => { window.location="login" }},        
    ];

    return (
        <div className='card'>
            <TabMenu model={items} activeIndex={activeIndex} />
        </div>
    )
}

export default RightMenu
