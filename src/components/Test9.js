import React from 'react';

const Test9 = () => {

    const click1 = () => {
        alert('클릭1')
    }
    const click2 = ()  => {
        alert('클릭2')
    }
    const click3 = () => {
        alert('클릭3')
    }

    return (
        <div>
            <h2>이벤트연습</h2>
            <p>
                <button onClick={click1}>클릭1</button>
                <button onClick={click2}>클릭2</button>
                <button onClick={click3}>클릭3</button>
            </p>
            <p>
                <button onClick={() => alert('연습1')}>클릭1</button>
                <button onClick={() => alert('연습2')}>클릭2</button>
                <button onClick={() => alert('연습3')}>클릭3</button>
            </p>
        </div>
    );
};

export default Test9;