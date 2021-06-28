import React, { useState } from 'react';

const Test6 = () => {
    const [ color , setColor ] = useState('yellow')
    const [ text , setText ] = useState('')

    const click = ()  => {
        setColor( text )
    }
    const onColor = (e)  => {
        setText( e.target.value )
    }

    return (
        <div>
            <h2 style={{color:color}}>컬러변경 </h2>            
            <select onChange = { onColor }>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
            </select>
            <button onClick={click}>선택</button>
        </div>
    );
};

export default Test6;