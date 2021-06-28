import React, { useState } from 'react';
import './Test8.css'


const Test8 = () => {
    const [ age , setAge ] = useState(10)
    const [ isColor , setIsColor ] = useState(false)

    const bgToggle = () => {
        setIsColor( !isColor )
    }
    const onUp = () => {
        setAge( age + 1 )
    }
    const onDown = () => {
        //setAge( age - 2 ) 
        setAge( prevAge => prevAge - 1)        
        setAge( prevAge => prevAge - 1)        
    }

    return (
        <div className={`wrap ${isColor ? 'tomato':'pink'}`}>
            <h2>background-color: {isColor ? 'tomato':'pink'} </h2>
            <h2> 나이 : {age} 살 </h2>
            <p>
                <button onClick={bgToggle}>배경 바꾸기</button>
                <button onClick={onUp}>나이증가</button>
                <button onClick={onDown}>나이 2살씩감소</button>
            </p>
            
        </div>
    );
};

export default Test8;

