import React from 'react';

const SurveyStep3 = ({form , onNext, onPrev }) => {
    const {username, age, addr, tel,job,email,sex,interest} = form 

    return (
        <>
           <ul>
           <li><span>이름</span>: <em>{username} </em> </li> 
           <li><span>나이</span>: <em>{age}</em> </li> 
           <li><span>주소</span>: <em>{addr}</em> </li> 
           <li><span>연락처</span>: <em>{tel}</em> </li> 
           <li><span>직업</span>: <em>{job}</em> </li> 
           <li><span>이메일</span>: <em>{email}</em> </li> 
           <li><span>성별</span>: <em>{sex}</em> </li> 
           <li><span>관심분야</span>: <em>{interest}</em> </li> 
           </ul>
           <p>
               <button onClick={onPrev}>이전</button>
               <button onClick={onNext}>다음</button>
           </p>
        </>
    );
};

export default SurveyStep3;