import React from 'react';

const Test11 = () => {
    const data = [
        {id:1, name:'이제훈', age:20, addr:'서울'},
        {id:2, name:'이솜', age:30, addr:'강원'},
        {id:3, name:'표예진', age:10, addr:'부산'},
        {id:4, name:'차지연', age:35, addr:'울산'},
        {id:5, name:'김의성', age:40, addr:'제주'},
    ]
    return (
        <div>
            <p>
                {data[0].id} / {data[0].name}/{data[0].age}/{data[1].addr}
            </p>
            <hr/>
            {
                data.map( (item, index) => {
                    return (<p key={index}>
                        {item.id} / { item.name} /
                        {item.age } / { item.addr }
                    </p>)
                })
            }
            <hr/>
            {
                data.map( (item, index) => <p key={index}>
                    {item.id} / { item.name} / { item.age} / {item.addr }
                </p>)
            }
            <hr/>
            {
                data.map( item => <p key={item.id}>
                    {item.id} / {item.name} / {item.age} /
                    { item.addr }
                </p>)
            }

        </div>
    );
};

export default Test11;