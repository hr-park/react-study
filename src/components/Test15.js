import React, { useState } from 'react';

const Test15 = () => {
    const [count , setCount] = useState(1)
    
    const increment = ()  => {
        setCount( count  + 1  )
    }
    const decrement = ()  => {
        setCount( count  - 1 )
    }

    return (
        <div>
            <h1> 숫자 : { count } </h1>
            <p>
                <button onClick={increment}> 증가 </button>
                <button onClick={decrement}> 감소 </button>
            </p>
        </div>
    );
};

export default Test15;