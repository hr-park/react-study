import React, { useRef } from 'react';

const Test4 = () => {
    const nameRef = useRef(null)
    const pwRef = useRef(null)

    const click = () => {
        const data = {
            name : nameRef.current.value ,
            pw : pwRef.current.value 
        }
        console.log( data )
        const json = JSON.stringify( data, null , 5)
        //JSON.stringify( value, replacer , space)
        console.log( json )
    }
    return (
        <div>
            {/* useRef수업용/ 실제 사용예제로는 적절하지않다 */}
            <input type="text" ref={nameRef} />
            <input type="text" ref={pwRef} />
            <button onClick={click}>확인</button>
            

        </div>
    );
};

export default Test4;