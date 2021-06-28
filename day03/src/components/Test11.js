import React, { useState } from 'react';
import Test11Animail from './Test11Animail';
import Test11Display from './Test11Display';
import Test11Name from './Test11Name';

const Test11 = () => {
    const [name , setName] = useState('아무개')
    const [ani , setAni] = useState('고양이')

    const onName = (e)  => {
        setName( e.target.value )
    }
    const onAni = (e)  => {
        const { value } = e.target 
        setAni( value )
    }

    return (
        <div>
            <h1> Test11에서 처리 - 컴포넌트 분리</h1>
            <Test11Name name={name} onName ={ onName } />
            <hr/>
            <Test11Animail ani={ani} onAni ={ onAni } />
            <hr />
            <Test11Display name={name} ani={ani} />
        </div>
    );
};

export default Test11;