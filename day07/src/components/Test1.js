import React, { useEffect, useState } from 'react';

const data1 = [
    {no:1, name:"홍길동"},
    {no:2, name:"a"},
    {no:3, name:"박길동"},
    {no:4, name:"김길동"},
    {no:5, name:"최동"},
    {no:6, name:"길동"},
    {no:7, name:"asec동"},
    {no:8, name:"길동"},
    {no:9, name:"asdaf동"},
    {no:10, name:"f동"},
]

const Test1 = () => {
    
    const [data, setData] = useState([
        {no:1, name:"홍길동"},
        {no:2, name:"a"},
        {no:3, name:"박길동"},
        {no:4, name:"김길동"},
        {no:5, name:"최동"},
        {no:6, name:"길동"},
        {no:7, name:"asec동"},
        {no:8, name:"길동"},
        {no:9, name:"asdaf동"},
        {no:10, name:"f동"},
    ])
    
    const [text, setText] = useState('')

    useEffect(()=>{
        const newData = data1.filter(item => item.name.indexOf(text) !== -1)
        //setData(newData)

        const newData1 = data1.filter(item=>{
            const re = new RegExp(text, 'ig')
            return item.name.match(re)
        })
        setData(newData1)
    }, [text])

    return (
        <div>
            <input type="text" onChange={e=>setText(e.target.value)} />
            <button>검색</button>
            <hr />
            <h2>검색결과</h2>
            {
                data.map(item=><p key={item.no}>
                    {item.no} / {item.name}
                </p>)
            }
        </div>
    );
};

export default Test1;