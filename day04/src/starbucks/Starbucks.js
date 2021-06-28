import React, { useState } from 'react';
import '../assets/css/reset.css'
import './style.css'
import data from '../assets/api/menu'
import Menu from './Menu';
import CoffeeList from './CoffeeList';

const Starbucks = () => {
    const [menus, setMenus ] = useState([
        { category:'all', name:'All'},
        { category:'coldbrew', name:'Cold Brew'},
        { category:'espresso', name:'Espresso'},
        { category:'frappuccino', name:'Frappuccino'},
        { category:'fizzio', name:'Fizzio'},
    ])

    const [coffees, setCoffees]  = useState(data)

    const onMenu = (category)  => {
        //alert(category)
        if( category ==='all' ){
            setCoffees( data )
        }else{
            setCoffees( data.filter( coffee => coffee.category === category))
        }        
    }
    
    return (
        <div className="wrap">
            <h1> STARBUCKS MENU </h1>
            <Menu menus={menus} onMenu={onMenu} />
            <CoffeeList coffees={coffees} />
        </div>
    );
};

export default Starbucks;