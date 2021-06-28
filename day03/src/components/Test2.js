import React, { useState } from 'react';
import './Test2.css'

const Test2 = () => {
    const [ isActive , setIsActive ] = useState(false)

    const addClass = ()  => {
        setIsActive( true )
    }
    const removeClass = ()  => {
        setIsActive( false )
    }
    const toggleClass = ()  => {
        setIsActive( !isActive )
    }

    return (
        <div className="wrap">
            <div>오늘은 토요일 입니다.</div>
            <div className="box">오늘은 토요일 입니다.</div>
            <div className={isActive ? 'on':''}>오늘은 토요일 입니다.</div>
            <div className={`box ${isActive ? 'on':''}`}>오늘은 토요일 입니다.</div>

            <p>
                <button onClick={addClass}>addClass</button>
                <button onClick={removeClass}>removeClass</button>
                <button onClick={toggleClass}>toggleClass</button>
            </p>
        </div>
    );
};

export default Test2;