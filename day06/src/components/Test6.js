import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [ count , setCount ] = useState(0)
    const [ done , setDone ] = useState(false)

    const onToggle = ()  => {
        setDone( !done )
    }
    const onReset =()=> {
        setCount(0)
        setDone( false )
    }
    
    useEffect( () => {
        let timer = null 
        if( done ) {
            timer = setInterval( () => {
                setCount( count => count + 1 )
            }, 1000)
        }else if( !done && count !== 0 ) {
            clearInterval( timer )
        }

        return() => {
            clearInterval( timer )
        }
    },[done])



    return (
        <div>
            <h1>카운트 : {count} </h1>
            <button onClick={onToggle}>{done ?  '중지':'시작'}</button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test6;