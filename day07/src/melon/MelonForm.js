import React, { useEffect, useState } from 'react';
import './MelonForm.css'

const MelonForm = ({onSearch}) => {
    const [text, setText] = useState('')

    useEffect( () => {
        onSearch(text)
    }, [text])

    const changeInput =(e) => {
        const{value}=e.target
        setText(value)
        //onSearch(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //데이터 넘김
        setText('')
    }

    return (
        <form className="MelonForm" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} />
        </form>
    );
};

export default MelonForm;