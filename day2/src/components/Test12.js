import React, { useState } from 'react';

const Test12 = () => {
    const [ name , setName ] = useState('아무개')
    const [ color , setColor ] = useState('pink')

    const onName1 = ()  => {
        setName('유재석')
    }
    const onName2 = () => {
        setName('강호동')
    }

    return (
        <div>
            <h1 style={{color:color}}>이름: {name} / 컬러: {color} </h1>
            <p>
                <button onClick={onName1}>유재석</button>
                <button onClick={onName2}>강호동</button>
                <button>이효리</button>
            </p>
            <p>
                <button onClick={() => setColor('tomato')}>tomato</button>
                <button onClick={() => setColor('yellow') }>yellow</button>
                <button onClick={() => setColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default Test12;

/*
    const [변수, 변수를변경하게도와주는함수]  = useState(초기값)
     
    const [count, setCount ]  = useState(초기값) - 0 ,'' , [], {}
    count  = 초기값
    count = setCount(값 or 수식)
*/