import React, { useEffect, useRef, useState } from 'react';

const Test1 = () => {
    const txtRef = useRef()
    const [text, setText] = useState('')

    useEffect( () => {
        console.log('실행')
        txtRef.current.focus()
    },[])

    return (
        <div>
            <input type="text"  ref={txtRef} onChange={e => setText(e.target.value)} />       
        </div>
    );
};

export default Test1;

