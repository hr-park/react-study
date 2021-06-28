import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test12 = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(3)

    useEffect( ()=>{
        getData()
    }, [id])

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)  
             .then(res => setPost(res.data))
    }

    const click = () => {
        
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <h3>{post.title}</h3>
        </div>
    );
};

export default Test12;