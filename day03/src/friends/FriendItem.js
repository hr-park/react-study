import React from 'react';

const FriendItem = ({item}) => {
    const {id, name , image, age } = item 

    return (
        <li>
            <p>
                <img src={image} alt="" />
            </p>
            <div>
                <strong>이름:{name} </strong>
                <span>나이:{age} </span>
            </div>
        </li>
    );
};

export default FriendItem;