import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [count , setCount] = useState(1)

    //1초마다 숫자 증가하기 
    useEffect( () => {
        console.log('useEffect')
        const id = setInterval( () => {
            setCount( prevCount =>  prevCount + 1 )
        }, 1000 )
        //뒷정리
        return() => {
            clearInterval( id )
        }
    },[])

    return (
        <div>
            <h1> 카운트 : { count } </h1>
        </div>
    );
};

export default Test4;