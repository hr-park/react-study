import React from 'react';

const Test11Display = ({ani, name }) => {
    return (
        <div>
            <h3>Display</h3>
            <h2>
                {name}님의 좋아하는 동물은 {ani} 입니다. 
            </h2>
        </div>
    );
};

export default Test11Display;