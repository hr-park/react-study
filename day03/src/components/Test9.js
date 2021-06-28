import React, { useRef, useState } from 'react';

const Test9 = () => {
    const idRef = useRef()

    const [form, setForm] = useState({
        userid:'',
        userpw:'',
        useremail:''
    }) 
    //form.userid / form.userpw , form.useremail 
    //비구조할당 
    const { userid , userpw , useremail } = form 


    const change = (e)  => {
        const { name , value } = e.target 
         setForm({
             ...form, 
             [name] : value 
         })
    }     

    const onReset =() =>{        
        setForm({
            useremail:'' , userid:'', userpw:''
        })
        idRef.current.focus()
    }

    return (
        <div>
            <h1>input 여러개</h1>
            <p>
                <input type="text" onChange={ change } 
                       value={userid} ref={idRef} name="userid" />
                <input type="text" onChange={ change } value={userpw} name="userpw"/>
                <input type="text" onChange={ change } value={useremail} name="useremail" />
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>아이디:{userid} </h4>
            <h4>비밀번호:{userpw} </h4>
            <h4>이메일:{useremail} </h4>
        </div>
    );
};

export default Test9;