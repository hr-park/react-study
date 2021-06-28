import React, { useState } from 'react';

const Test7 = () => {
    const [ check , setCheck ] = useState( false )

    const change = (e) => {
        const { checked } = e.target
        // setCheck( e.target.checked )
        setCheck( checked )
    }
    const click = ()  => {
        alert( `checked ${ check }` )
    }

    return (
        <div>
            <input type="checkbox" checked={check} onChange={change} />
            { check ? '숨기기':'보이기'}
            <button onClick={click}>확인</button>

            {
                check &&  <div style={{width:200, height:100, background:'tomato',margin:20}}></div>
            }
        </div>

        
    );
};
export default Test7;




/*
import React, { useState } from 'react';

const Test7 = () => {
    const [ check , setCheck ] = useState( false )

    const change = (e) => {
        const { checked } = e.target
        // setCheck( e.target.checked )
        setCheck( checked )
    }

    return (
        <div style={{color: check ? 'tomato':'#000'}}>
            <input type="checkbox" checked={check} onChange={change} />
            오늘은 토요일 입니다.
        </div>
        // 체크박스 선택 - 글자색 변경 
    );
};
export default Test7;
*/