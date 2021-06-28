import React, { useState } from 'react';
const Name = () => {
    const [ name , setName ] = useState('')
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <p>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" value={name} 
                onChange={(e) =>  setName( e.target.value ) }/>
                <span style={{marginLeft:20}}> {name} </span>
            </p>
        </div>
    );
};

const Animail = ({ani, onAni}) => {
    return (
        <div>
            <h2>Animail 컴포넌트</h2>
            <p>
                <label>좋아하는 동물은? : </label>
                <input type="text" value={ani} onChange={onAni} />
                <span style={{marginLeft:15}}> {ani} </span>
            </p>
        </div>
    );
};

const Display = ({ani}) => {
    return (
        <div>
           <h2>Display 컴포넌트</h2> 
           <h1>내가 좋아하는 동물은 {ani} 입니다. </h1>
           <h1> {`내가 좋아하는 동물은 ${ani} 입니다.`} </h1>
        </div>
    );
};

const Test10 = () => {
    const [ ani, setAni ] = useState('동물')

    const onAni = (e)  => {
        const { value } = e.target 
        setAni( value )
    }

    return (
        <div>
            <h1>컴포넌트 분리와 데이터 값 처리 </h1>
            <Name />
            <hr/>
            <Animail ani={ani}  onAni={onAni} />
            <hr />
            <Display ani = {ani} />
        </div>
    );
};

export default Test10;