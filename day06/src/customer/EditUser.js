import React, { useEffect, useState } from 'react';

const EditUser = ({current , onUpdate}) => {
    const [user , setUser] = useState( current )
    // const [user , setUser] = useState( {addr: "무지개택시기사", id: 1, name: "김제훈"})
    const { id , name , addr } = user 

    const changeInput  =(e) => {
        const { value , name } = e.target 
        setUser({
            ...user ,
            [name] : value 
        })
    }
    //id: 번호가 같은것을 비교 , user:업데이트 값 
    const onSubmit = (e)  => {
        e.preventDefault() 
        onUpdate(id , user)
        setUser({
            name:'' , addr:''
        })
    }

    useEffect(() => {
        setUser( current )
    }, [current])


    return (
        <form onSubmit={onSubmit}>
        <h2>모범택시 고객 수정 </h2>
        <p>
            <label>이름</label>
            <input type="text" value={name} name="name" onChange={changeInput} />
        </p>
        <p>
            <label>주소</label>
            <input type="text" value ={ addr} name="addr" onChange={changeInput} />
        </p>
        <p>
            <button>수정</button>
            <button>취소</button>
        </p>
    </form>
    );
};

export default EditUser;