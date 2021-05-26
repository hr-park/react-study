import React from 'react';

const Test3 = () => {
    const style1 = {
        backgroundColor:'yellow', width:400,
        padding:15, margin:15 ,color:'tomato',
        textIndent:20
    }
    const style2 = {
        backgroundColor:'pink',width:450, padding:20,
        marginBottom:30, marginLeft:20, fontSize:30
    }

    return (
        <div>
            <h2 style={style1}>스타일 연습</h2>
            <h2 style={style2}>스타일 연습</h2>
            <h2 style={{backgroundColor:'skyblue',textIndent:30}}>스타일 연습</h2>
            <h2 style={{backgroundColor:'lime'}}>스타일 연습</h2>
        </div>
    );
};

export default Test3;