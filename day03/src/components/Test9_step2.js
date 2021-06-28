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


    const change1 = (e)  => {
         setForm({
             ...form, 
             userid : e.target.value 
         })
    }
    const change2 = (e)  => {
        setForm({
            ...form, 
            userpw : e.target.value 
        })
    }
    const change3 = (e)  => {
        setForm({
            ...form, 
            useremail : e.target.value 
        })
    }

    const onReset =() =>{
        

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