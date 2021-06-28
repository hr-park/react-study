import React, { useRef, useState } from 'react';

const Test5 = () => {
    const no = useRef(1)
    const textRef = useRef()

    const [ text , setText] = useState('')
    const [ data, setData ] = useState([])
    //[{id:1, text:'ddd'}]

    const changeInput = (e) => {
        const {value} = e.target 
        setText( value )
    }
    const onAdd = (e) => {
        e.preventDefault()
        setData([
            ...data ,
            {
                id: no.current++,
                text: text 
            }
        ])
        setText('')
        textRef.current.focus()
    }
    return (
        <div>
            <h2>엔터 - 데이터추가</h2>
            <form onSubmit={ onAdd }>
                <input type="text" value={text} onChange={changeInput} ref={textRef} />
                <button type="submit">추가</button>
            </form>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test5;