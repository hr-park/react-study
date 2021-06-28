import React, { useRef, useState } from 'react';

const Test3 = () => {
    const num = useRef(1)
    // const num = useRef(시작값)
    const [data , setData] = useState([])
    const names ='김도현,고민시,이승철,하하,이승기,이효리,화사,엄정화,유재석,강호동,김건모,김소현,송지아,이지아,김나은,김건우'.split(',')    

    const onAdd = ()  => {
        const ran = Math.floor( Math.random() * names.length )
        setData([
            ...data,
            {
                id: num.current++ ,
                text: names[ran]
            }
        ])
    }

    return (
        <div>
            <h2>고유값 추가</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)  
                }
            </ul>
        </div>
    );
};

export default Test3;