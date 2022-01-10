import React from 'react'
import { Menu } from 'primereact/menu';
import { Menu as Menu1 } from 'primereact/menu';
import { TabMenu } from 'primereact/tabmenu';
import { Menubar } from 'primereact/menubar';

function LeftMenu() {
    const items = [
        {
            label: 'Item1',
            items: [
                {label: 'option1'},
                {label: 'option2'}                    
            ]
        },
        {
            label: 'Item2',
            items: [
                {label: 'option1'},
                {label: 'option2'}                    
            ]
        },
    ];

    const start = <h2>U-tube</h2>

    return (
        <div className='card' style={{float: 'left'}}>
            {/* <Menubar
                model={items}
            /> */}
            <TabMenu model={items} />
            {/* <Menu model={items} />
            <Menu1 model={items} /> */}
        </div>
    )
}

export default LeftMenu
