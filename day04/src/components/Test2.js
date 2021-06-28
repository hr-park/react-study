import React, { useState } from 'react';

const Test2 = () => {
    const [data, setData] = useState([])
    //[{id:1, text:'내용'},{id:2, text:'문자'}]

    const onAdd1 = () => {
        setData( data.concat({id:data.length , text:'강호동'+Math.floor( Math.random() * 10 )}) )        
    }
    const onAdd2 = ()  => {
        const newData = data.concat({id:data.length, text:'유재석'+Math.floor( Math.random() * 10 )})
        
        setData( newData )
    }

    const onAdd3 = ()  => {
        setData([
            ...data, 
            {
                id:data.length ,
                text:'이수근'+Math.floor( Math.random()*10)
            }
        ])
    }

    const onAdd = () => {
        const newData = {id:data.length, text:'홍길동'+Math.floor(Math.random()*10)}
        setData([...data, newData])
    }

    return (
        <div>
            <h2>데이터 추가</h2>
            <p><button onClick={ onAdd }>추가</button></p>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li> )
                }
            </ul>
        </div>
    );
};

export default Test2;