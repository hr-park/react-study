import React from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
    border:1px solid #000;
    padding:10px;
    margin:10px;
    width:${props=>props.w};
    background:${props => props.bg ? props.bg : '#dcdcdc'};
    display:flex;
    flex-wrap:wrap;
`
const Box = styled.button`
    width:${props => props.wt};
    margin:10px;height:30px;
    background:${props=>props.bg};

    /* 주어진 속성에 css를 다시 설정할 수 있다. */
    ${ props => props.good && css`
        background:skyblue;
        height:50px;color:#fff;
        transition:0.4s;
        &:hover{
            background:hotpink;color:#000;
        }
    `}
`

const Test8 = () => {
    return (
        <Container w="600px" bg="pink">
            <Box wt="200px" bg="tomato">버튼</Box>
            <Box wt="200px" bg="yellow">버튼</Box>
            <Box wt="200px" bg="yellow">버튼</Box>
            <Box wt="400px" bg="yellow">버튼</Box>
            <Box wt="200px" bg="lime">버튼</Box>
            <Box wt="200px" bg="yellow">버튼</Box>
        </Container>
    );
};

export default Test8;