import React from 'react';

const Sub1 = (props) => {
    return (
        <div>
            <h2>
                {props.xxx} /
                {props.yyy}
            </h2>
        </div>
    );
};


const Sub = (props) => {
    return (
        <div>
            <h2>Sub</h2>
            <h3>이름: {props.name} ({typeof props.name}) </h3>
            <h3>나이: {props.age } ({typeof props.age}) </h3>
            <hr/>
            <Sub1  xxx="나이는 12살" yyy="지금은 점심시간"  />
            <Sub1  xxx="나이는 20살" yyy="지금은 저녁시간"  />
        </div>
    );
};

const Test6 = () => {
    const data1 = { name:'강아지', age: 2}
    const data2 = { name:'고양이', age: 3}
    return (
        <div>
            <h2>Test6</h2>
            <hr/>
            <Sub name='강호동' age={20} />
            <Sub name="유재석" age={30} />
            <Sub name={data1.name} age= {data1.age} />
            <Sub name={data2.name} age= {data2.age} />
            <Sub {...data1} />
            <Sub {...data2} />
        </div>
    );
};

export default Test6;