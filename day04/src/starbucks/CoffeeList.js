import React from 'react';
import CoffeeItem from './CoffeeItem';

const CoffeeList = ({coffees}) => {
    return (
        <ul className="list">
           {
               coffees.map( coffee => <CoffeeItem key={coffee.id} 
                                        coffee={coffee} />)
           } 
        </ul>
    );
};

export default CoffeeList;