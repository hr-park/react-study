import React, { useState } from 'react';

const Test3 = () => {
    const [username , setUsername] = useState('')
    const [userpw , setUserpw] = useState('')

    //event , evt , e 
    const change1  = (e) => {
        //비구조할당
        const { value } = e.target 
        setUsername( value )        
    } 
    const change2  = (e) => {
        setUserpw( e.target.value )
    } 

    return (
        <div>
            <input type="text" onChange={change1} />
            <input type="text" onChange={change2} />
            <button>초기화</button>
            <h2>아이디 : { username } </h2>
            <h2>비밀번호 : {userpw } </h2>
        </div>
    );
};

export default Test3;