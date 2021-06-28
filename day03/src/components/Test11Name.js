import React from 'react';

const Test11Name = ( {name, onName} ) => {
     
    return (
        <div>
            <h3>Name</h3>
            <p>
                <label>이름 :</label>
                <input type="text" value={name} onChange={onName} />
                <span style={{marginLeft:15}}> { name} </span>
            </p>
        </div>
    );
};

export default Test11Name;