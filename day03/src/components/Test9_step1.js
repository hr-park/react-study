import React, { useRef, useState } from 'react';

const Test9 = () => {
    const idRef = useRef()

    const [ userid , setUserid] = useState('')
    const [ userpw , setUserpw] = useState('')
    const [ useremail , setUseremail] = useState('')

    const change1 = (e)  => {
        setUserid (  e.target.value )
    }
    const change2 = (e)  => {
        setUserpw( e.target.value )
    }
    const change3 = (e)  => {
        setUseremail ( e.target.value ) 
    }

    const onReset =() =>{
        setUserid('')
        setUserpw('')
        setUseremail('')
        idRef.current.focus()
    }

    return (
        <div>
            <h1>input 여러개</h1>
            <p>
                <input type="text" onChange={ change1 } 
                       value={userid} ref={idRef} />
                <input type="text" onChange={ change2 } value={userpw}/>
                <input type="text" onChange={ change3 } value={useremail} />
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>아이디:{userid} </h4>
            <h4>비밀번호:{userpw} </h4>
            <h4>이메일:{useremail} </h4>
        </div>
    );
};

export default Test9;