import React, { useRef, useState } from 'react';
const Item = ({item, onDel}) => {
    return (
        <p>
           번호:{item.id}  / 내용: {item.text}    
           <button onClick={() => onDel(item.id)}>삭제</button>         
        </p>
    );
};

const List = ({data, onDel}) => {
    return (
        <div>
            <h2>List</h2> 
            {
                data.map( item => <Item key={item.id} item={item} onDel={onDel} />)
            }           
        </div>
    );
};

const Form = ({onAdd}) => {
    const textRef = useRef()
    const [ text , setText] = useState('')

    const changeInput = (e)  => {
        const { value } = e.target 
        setText( value )
    }

    const onInsert = (e) => {
        e.preventDefault()

        if( !text ) return 

        onAdd( text )
        setText('')
        textRef.current.focus()
    }
    return (
        <form onSubmit={onInsert}>
            <h2>form</h2>   
            <input type="text" value={text} onChange={changeInput} ref={textRef} />
            <button type="submit">추가</button>         
        </form>
    );
};

const Test1 = () => {
    const no = useRef(4)
    const [data , setData] = useState([
        {id:1, text:'점심먹기'},
        {id:2, text:'운동하기'},
        {id:3, text:'잠자기'},
    ])

    const onAdd = (text)  => {
        //alert(text)
        setData([
            ...data, 
            {
                id: no.current++,
                text : text 
            }
        ])
    }

    const onDel = (id)  => {
        //alert(id)
        setData( data.filter( item => item.id !== id ))
    }


    return (
        <div>
            <h2>일정관리</h2>
            <Form  onAdd={onAdd} />
            <List data={data} onDel={onDel} />
        </div>
    );
};

export default Test1;