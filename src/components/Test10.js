import React from 'react';

const Test10 = () => {
    const title = '모범택시'
    const data = ['이제훈','이솜','표예진','차지연','장혁진','배유림']
    return (
        <div>
            <h2>{title}</h2>
            <p> {data[0]} </p>
            <p> {data[1]} </p>
            <p> {data[2]} </p>
            <p> {data[3]} </p>
            <p> {data[4]} </p>
            <p> {data[5]} </p>
            <hr/>
            {
                data.map((item , index) => {
                    return( <p key={index}>{index}/{item} </p>)
                })
            }
            <hr/>
            {
                data.map( (item , index) => <p key={index}>
                    {index} / { item }
                </p>)
            }
        </div>
    );
};

export default Test10;