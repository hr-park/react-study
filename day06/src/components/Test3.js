import React, { useEffect, useState } from 'react';
const Mousemove = () => {
    const [x , setX ] = useState(0)
    const [y , setY ] = useState(0)

    const move = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect( ()  => {
        console.log('mount')
        window.addEventListener('mousemove', move)
        //뒷정리
        return() => {
            window.removeEventListener('mousemove', move )
        }
    },[])

    return (
        <div>
            <h1>마우스의 좌표</h1>
            <div style={{width:300, padding:30, border:'1px solid #000', margin:10}}>
                    <h2>X :{x}  /  Y:{y} </h2>
            </div>
        </div>
    );
};


const Test3 = () => {
    const [done , setDone] = useState( false )

    const onToggle = ()  => {
        setDone( !done )
    }

    return (
        <div>
            <button onClick={onToggle}>
                {done ? '숨기기':'보이기'}
            </button>
            { done && <Mousemove />}
        </div>
    );
};

export default Test3;