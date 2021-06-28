import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({menus, onMenu}) => {
    return (
        <div className="menu">
            {
                menus.map( (menu, index )=> <MenuItem key={index} menu={menu} onMenu={onMenu} />)
            }
        </div>
    );
};

export default Menu;