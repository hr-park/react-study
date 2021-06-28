import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border:1px solid #000;
    padding:25px;
    width:${props => props.w};
    margin:10px;
    h2{
        font-size:80px;
    }
`

const Button = styled.button`
    margin-right:10px;
    font-size:50px;
    background:pink;
`

const Test9 = () => {
    const [count, setCount] = useState(1)
    const [max, setMax] = useState(10)
    const [min, setMin] = useState(0)

    const increment = () => {
        setCount(count > max ? max : count+1)
    }

    const decrement = () => {
        setCount(count < min ? min : count-1)
    }
    return (
        <Container w="400px">
            <h2>숫자 : {count}</h2>
            <button className="up" onClick={increment} disabled={count === max}>UP</button>
            <button className="down" onclick={decrement} disabled={count === min}>DOWN</button>
        </Container>
    );
};

export default Test9;