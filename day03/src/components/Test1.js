import React, { useState } from 'react';

const Test1 = () => {
    const [ count , setCount ] = useState(0) 
    const [ color , setColor ] = useState('lime')
    
    const increase = ()  => {
        setCount( count + 1 )
    }
    const decrease = () => {
        setCount( count -1 )
    }
    const reset = () => {
        setCount( 0 )
    }

    const increase1 = ()  => {
        //함수안에 내용은 일괄처리, 동시처리, 배치처리 
        // setCount(이전값 => 이전값 + 1) : 이전값 사용자정의
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }
    const decrease1 = ()  => {
        setCount( state => state - 1)
        setCount( state => state - 1)
        setCount( state => state - 1)
    }
    
    const increase2 = ()  => {
        //for문 사용 
        for( let i = 0; i <5 ; i++ ){
            setCount( prevCount => prevCount +1 )
        }
    }
    const decrease2 = ()  => {
        for( let i = 0; i <5 ; i++ ){
            setCount( prevCount => prevCount  - 1 )
        }
    }
    
    return (
        <div>
            {/* jsx영역 */}
            <h1 style={{color:color}}>숫자 : {count} / 컬러 {color}</h1>

            <p>
                <button onClick={increase1}>3씩 증가</button>
                <button onClick={decrease1}>3씩 감소</button>
            </p>
            <p>
                <button onClick={increase2}>5씩 증가</button>           
                <button onClick={decrease2}>5씩 증가</button>           
            </p>
            <hr />

            <p>
                <button onClick={increase}>증가</button>
                <button onClick={decrease}>감소</button>
                <button onClick={reset}>초기화</button>
            </p>
            <p>
                <button onClick={() => setColor('green')}>green</button>
                <button onClick={()=> setColor('blue')}>blue</button>
                <button onClick={() => setColor('pink')}>pink</button>
            </p>
        </div>
    );
};

export default Test1;