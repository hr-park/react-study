import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [count, setCount] = useState(1)
    const [ step  , setStep ] = useState( 5 )

    useEffect( () => {
        const timer = setInterval( () => {
            setCount( state => state + step )
        }, 1000)
        return() => {
            clearInterval( timer )
        }
    },[step])

    const changeInput = (e) => {
        const { value } = e.target 
        setStep( Number(value)  )
    }

    return (
        <div>
            <input type="text" value={step} onChange={changeInput} />
            <h1>카운트 : {count} </h1>
        </div>
    );
};

export default Test5;