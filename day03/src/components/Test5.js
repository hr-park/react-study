import React, { useRef } from 'react';

const Test5 = () => {
    const colorRef = useRef(null)

    const click = ()  => {
        const data = {
            color : colorRef.current.value
        }
        console.log( data )
        const json = JSON.stringify( data , null , 5)
        console.log( json )
    } 
    return (
        <div>
            <h2>컬러변경 useRef 수업용 </h2>            
            <select ref={colorRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
            </select>
            <button onClick={click}>선택</button>
        </div>
    );
};

export default Test5;