import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({data, onDel, onToggle}) => {
    return (
        <ul className="TodoList">
            {
                data.map( item => <TodoItem key={item.id} item={item} onDel={onDel} onToggle={onToggle} />)
            }
        </ul>
    );
};

export default TodoList;