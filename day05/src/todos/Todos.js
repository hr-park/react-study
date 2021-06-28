import React, { useRef, useState } from 'react';
import './Todos.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todos = () => {
    const no = useRef(1)
    const [data, setData] = useState([
        // {id:1, text:'오후시간', done:true }
    ])

    const onAdd = ( text ) => {
        // alert('추가')
        setData([
            ...data ,
            {
                id:no.current++,
                text ,
                done:false 
            }
        ])
    }

    const onDel = ( id )  => {
        //alert( id )
        setData( data.filter( item => item.id !== id ))
    }
/*
    const onToggle = ( id )  => {
        //alert('토글')
        setData( data.map( item => {
            if( item.id === id ) {
                return({
                    ...item ,
                    done : !item.done 
                })
            }else {
                return item 
            }
        }))
    }
*/
const onToggle = ( id )  => {
    setData( data.map( item => item.id === id ? 
                               {...item, done:!item.done }:item))
}

    return (
        <div className="Todos">
            <h1>TODO LIST</h1>
            <TodoForm  onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;