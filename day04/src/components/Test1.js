import React, { useRef, useState } from 'react';

const Test1 = () => {
    const textRef = useRef()
    const [form, setForm] = useState({
        text1:'', text2:'', text3:''
    })
    //form.text1, form.text2, form.text3 
    const {text1, text2, text3} = form 
   
    const changeInput = (e) => {
        const { value , name } = e.target 
        setForm({
            ...form , 
            [name]: value            
        })
    }
    const onReset=() => {
        setForm({
            text1:'',
            text2:'',
            text3:'',
        })
        textRef.current.focus()
    }
    return (
        <div>
            <input type="text" value={text1} name="text1" onChange={ changeInput } ref={textRef} />
            <input type="text" value={text2} name="text2" onChange={ changeInput } />
            <input type="text" value={text3} name="text3" onChange={ changeInput } />

            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test1;