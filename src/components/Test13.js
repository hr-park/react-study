import React, { useState } from 'react';

const Test13 = () => {
    const [bgcolor , setBgcolor] = useState('tomato')

    const onColor = ()  => {
        // setBgcolor('yellow')
        setBgcolor( bgcolor === 'tomato' ? 'yellow':'tomato' )
    }
    
    return (
        <div>
            <p>문제: h1 클릭시 배경색 tomato / yellow </p>
            <h1 style={{width:400, height:100, lineHeight:4, fontSize:25, textAlign:'center', border:'1px solid #000', margin:15, cursor:'pointer', backgroundColor:bgcolor}}
            onClick={onColor}
            >
                배경색 : {bgcolor}
            </h1>
        </div>
    );
};

export default Test13;