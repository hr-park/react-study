import React, { useRef, useState } from 'react';
import './style.css'
import FriendList from './FriendList'
import FriendInput from './FriendInput'
import data  from '../assets/api/friend'

const Friend = () => {
    // const no = useRef(6)
    const no = useRef(data.length)   
    const [ friends , setFriends ] = useState(data)
    const [ isview  , setIsview ] = useState( false )
 

    const onAdd = (form) => {
        form.id = no.current++
        setFriends([
            ...friends,
            form 
        ])
    }

    //삭제
    const onRemoveAll = ()  => {
        setFriends([])
    }
    //복구
    const onRestore = ()  => {
        setFriends(data)
    }

    const onRemove = (id)  => {
        setFriends( friends.filter(friend => friend.id !== id  ))
    }

    return (
        <div className="wrap">
            <h1>친구들 총인원 : {friends.length} </h1>
            <p className="chk">
                <input type="checkbox" checked={isview} onChange={ e => setIsview( e.target.checked ) } />
                { isview ? '비활성':'활성'} 
            </p>

            <FriendList  friends={friends} onRemove={onRemove} />
            
            <p className="btn">
                <button onClick={onRemoveAll}>모두삭제</button>
                <button onClick={onRestore}>초기복구</button>
            </p>

            {
                isview &&  <FriendInput onAdd={onAdd} />
            }
           
        </div>
    );
};

export default Friend;