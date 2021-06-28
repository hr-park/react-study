import React from 'react';

const Test11Animail = ({ani, onAni}) => {
    return (
        <div>
            <h3>Animail</h3>
            <p>
                <label>동물 :</label>
                <input type="text" value={ani} onChange={onAni} />
                <span style={{marginLeft:15}}> {ani} </span>
            </p>
        </div>
    );
};

export default Test11Animail;