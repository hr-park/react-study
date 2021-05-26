import React from 'react';


/*
const Sub = (props) => {
    return (
        <div>
            <h2> 타이틀 : {props.title}</h2>
            <ul>
                <li>이름: {props.name}  </li>
                <li>나이: {props.age} </li>
                <li>주소: {props.addr}</li>
                <li>전화: {props.tel} </li>
                <li>컬러: {props.color} </li>
                <li>참/거짓: {props.done ? '참':'거짓'} </li>
            </ul>
        </div>
    );
};
*/

const Sub = ({title, name, age, addr, tel, color,done }) => {
    //비구조할당 
    //const {title, name, age, addr, tel, color,done } = props 
    return (
        <div style={{border:`1px solid ${color}`, width:400, marign:10, padding:15}}>
            <h2> 타이틀 : {title}</h2>
            <ul>
                <li>이름: {name}  </li>
                <li>나이: {age} </li>
                <li>주소: {addr}</li>
                <li>전화: {tel} </li>
                <li>컬러: {color} </li>
                <li>참/거짓: {done ? '참':'거짓'} </li>
            </ul>
        </div>
    );
};

const Test7 = () => {
    const msg = 'props 성격알아보기'
    return (
        <div>
            <Sub 
                title = {msg}
                name = '홍길동'
                // 숫자, 논리값 {}
                age = { 20 }
                addr = '서울'
                tel = '010-1111-2222'
                color='green'
                done = { true }
            />
        </div>
    );
};

export default Test7;