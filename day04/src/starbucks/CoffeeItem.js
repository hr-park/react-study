import React from 'react';

const CoffeeItem = ({coffee}) => {
    const {id, title,category,price,img,desc} = coffee

    return (
        <li>
           <img src={img} alt={title} />
           <h3>{title} </h3> 
           <p>가격 :{price} </p>
           <p>정보 : {desc} </p>
        </li>
    );
};

export default CoffeeItem;