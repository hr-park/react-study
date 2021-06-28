import React, { useRef, useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    const no = useRef(6)
    const [data, setData] = useState([
        {id:1, name:'홍길동'},
        {id:2, name:'유재석'},
        {id:3, name:'강호동'},
        {id:4, name:'이효리'},
        {id:5, name:'고민시'},
    ])


    const onDel = (id)  => {
        // alert( '삭제')
        setData( data.filter( item => item.id !== id))
    }

    const onInsert = (text) => {
        setData([
            ...data ,
            {
                id: no.current++ ,
                name : text 
            }
        ])
    }

    return (
        <div>
            {
                data.map( item => <p key={item.id}>
                    {item.id} / { item.name }
                </p>)
            }
            <hr/>
            <Test6Sub onDel={onDel}  onInsert={onInsert} />
        </div>
    );
};

export default Test6;