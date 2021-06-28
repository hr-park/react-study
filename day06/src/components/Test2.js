import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test2 = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const [count , setCount] = useState(0)

    const onColor = ()  => {
        setCount( count + 1 )
        ref1.current.style.color = 'yellow'
        ref2.current.style.color = 'red'
    }
    //브라우저에 그려진 후
    useEffect( ()  => {
        console.log('useEffect')
        ref1.current.style.color='skyblue'
    },[])

    //브라우저에 그려지기 전에 실행 
    useLayoutEffect( () => {
        console.log('useLayoutEffect')
        ref2.current.style.color='lime'
    },[])


    return (
        <div>
            <h1>카운트 : {count} </h1>
            <h1 ref={ref1}> useEffect </h1>
            <h1 ref={ref2}> useLayoutEffect </h1>
            <button onClick={onColor}>컬러와 숫자변경</button>
        </div>
    );
};

export default Test2;