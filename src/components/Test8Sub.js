import React from 'react';
import PropTypes from 'prop-types';

const Test8Sub = ({name,age,addr,tel,color,done}) => {
    //const {name,age,addr,tel,color,done} = props 
    return (
        <div style={{border:`1px solid ${color}`,width:400, padding:20, margin:20 }}>
           <h2>{name} 신상명세서</h2> 
           <ul>
               <li>이름: {name} </li>
               <li>나이:{age} </li>
               <li>주소:{addr} </li>
               <li>전화:{tel}</li>
               <li>컬러:{color}</li>
               <li>동의여부:
                    {done === true ? '동의':'비동의'}
               </li>
           </ul>
        </div>
    );
};
/*
컴포넌트명.propTypes = {
    속성: PropTypes.타입
};
*/
Test8Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    addr : PropTypes.string, 
    tel : PropTypes.string, 
    done : PropTypes.bool,
    color: PropTypes.string 
};
// props의 초깃값을 정의합니다.
/*
컴포넌트명.defaultProps = {
    속성: '초기값'
};
*/
Test8Sub.defaultProps = {
    name: '아무개',
    age: 10,
    addr:'주소',
    tel:'000-0000-0000',
    color:'red',
    done:true 
};
  

export default Test8Sub;