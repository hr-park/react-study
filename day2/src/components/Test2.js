import React from 'react';

const Test2 = () => {
    //함수영역 
    const title ='신상명세서'
    const name ='유재석'
    const age = 30 
    const addr = '서울'
    const tel ='010-0000-0000'
    /* 여러줄 주석 */
    //한줄주석

    return (
        <>
           <h2>JSX영역</h2> 
           <h3> {title} </h3> 
           <ul>
               <li>이름: {name} </li>
               <li>나이: {age} </li>
               <li>주소: {addr} </li>
               <li>전화: {tel} </li>               
           </ul>
           //한줄주석
           /* 여러줄주석   */
           {/* 주석처리한다 */}

           <p
                //나는 한줄 주석 - 태그안에 사용
                /*
                    나는 여러줄 주석 
                */
           >
               지금은 연습중 입니다. 
           </p>
        </>
    );
};

export default Test2;