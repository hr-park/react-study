import React from 'react';

const Test5 = () => {
    const done1 = true 
    const done2 = false 
    const done3 = undefined
    const done = 'A'

    return (
        <>
            <p>
                { done1 === true ? <button>참</button>:<button>거짓</button>}
            </p>   
            <p>
                { done1 ? <button>로그인</button>:<button>로그아웃</button>}
            </p>
            <p>
                { done1 && <button>조건맞음</button>}
            </p>
            <p>
                {done2 === false && <button>false맞음</button>}
            </p>
            <p>
                {/* 값이 존재하지 않을때, false  */}
                {done3 || <button>값없음</button>}
                {done2 || <button>값없음</button>}
            </p>
            <p>
                {/* 다중 if문  */}
                {done === 'A' && 'A입니다.' }
                {done === 'B' && 'B입니다.' }
                {done === 'C' && 'C입니다.' }
                {done === 'D' && 'D입니다.' }                
            </p>
        </>
    );
};

export default Test5;