import React, { useRef, useState } from 'react';
import AddUser from './AddUser'
import ListUser from './ListUser'
import EditUser from './EditUser'
import './style.css'

const Customer = () => {
    const no = useRef(5)
    const userData = [
        {id:1, name:'김제훈',addr:'무지개택시기사'},
        {id:2, name:'강하나',addr:'검사'},
        {id:3, name:'장성철',addr:'무지개대표'},
        {id:4, name:'고은',addr:'무지개해커'},
    ]

    const [users , setUsers] = useState( userData )
    const [isEdit , setIsEdit] = useState( false  )
    const [ current , setCurrent] = useState({})


    const onAdd = ( user )  => {
        user.id = no.current++
        setUsers( [...users , user ])
    }
    const onRemove = (id) => {
        setUsers( users.filter( user => user.id !== id ))
    }

    const onModify = (user) => {
        setIsEdit( true )
        setCurrent(user)
    }

    const onUpdate = (id , updata )  => {
        setIsEdit( false )
        setUsers( users.map( user => user.id === id ?  
                                          updata: user ) )
    }

    return (
        <div className="Customer">
            {
                isEdit ? 
                <EditUser current={current} onUpdate={onUpdate} /> 
                :
                <AddUser  onAdd={onAdd} />
            }
         
            <ListUser users={users}  onRemove={onRemove} onModify={onModify} />
        </div>
    );
};

export default Customer;