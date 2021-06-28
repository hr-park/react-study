import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test10 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setData(res.data)
    }

    const getData3 = async() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
             .then(res => {
                 console.log(res)
             })
    }
    
    const getData2 = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        setData(data)
    }

    const getData1 = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setData(res))
    }

    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test10;