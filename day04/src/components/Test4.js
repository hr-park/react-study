import React, { useRef, useState } from 'react';

const Test4 = () => {
    const no = useRef(1)
    const idRef = useRef(null)

    const [data, setData] = useState([])
  //[{id:1, userid:'xx', pw:'123' },{id:2, userid:'yy', pw:'254' },]
    const [form , setFrom ] = useState({
        userid:'' , pw:''
    })

    // 비구조할당
    const {userid , pw } = form 

    const changeInput = (e) => {
        const {name , value} = e.target 
        setFrom({
            ...form ,
            [name]:value
        })
    }

    const onAdd = () => {
        setData([
            ...data ,
            {
                id: no.current++,
                userid , 
                pw  
            }
        ])
        setFrom({
            userid:'',
            pw:''
        })
        idRef.current.focus()
    }
    
    return (
        <div>
            <input type="text" value={userid} name="userid" onChange={changeInput}  ref={idRef }/>
            <input type="text" value={pw} name="pw" onChange={changeInput} />
            <button onClick={ onAdd }>추가</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / { item.userid} / {item.pw}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;