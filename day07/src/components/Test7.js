import React from 'react';
import styled from 'styled-components'

//const 스타일 컴포넌트명 = styled.태그명``
//const 스타일 컴포넌트명 = styled.('태그명')``
const Container = styled.section`
    padding:20px;
    border:1px solid #000;
    margin:20px;
`
const Box1 = styled('div')`
    padding:20px;background:pink;transition:.4s;margin-bottom:10px;
    &:hover{
        background:skyblue;
    }
`
const Box2 = styled.article`
    padding:15px;background:tomato;transition:.6s;
`
const Box3 = styled.p`
    color:blue;
`
const Button = styled.button`
    padding:20px;background:pink;transition:.4s;margin-bottom:10px;
    &:hover{
        background:skyblue;
    }
`


const Test7 = () => {
    return(
        <div>
            <h2>styled-components</h2>
            <Container>
                <Box1>안녕하세요</Box1>
                <Box2>안녕하세요</Box2>
                <Box3>안녕하세요</Box3>
                <Button>확인</Button>
            </Container>
        </div>
    );
}

export default Test7;