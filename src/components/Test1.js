import React  from 'react';

const Test1 = () => {
    return (
        <>
            <h2>JSX영역</h2>
            <p>한줄이상일경우는 div로 묶어준다</p>
            <p> Fragment 영역을 묶어준다  </p>
            <p> 빈태그  반드시 맨뒤에  / </p>
            <img src="" /> 
            <input type="text" />
            <br/>
            <hr/>
        </>
    );
};

export default Test1;