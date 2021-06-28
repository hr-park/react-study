import React from 'react';

const MenuItem = ({menu, onMenu}) => {
    const {category , name } = menu
    return (
        <button onClick={() => onMenu(category) }>
            {name}
        </button>
    );
};

export default MenuItem;