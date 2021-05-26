import React, { useState } from 'react';
import './Test16.css'

const Test16 = () => {
    const [data , setData] = useState([
        {id:1, name:'이제훈',age:20, addr:'서울',done:true},
        {id:2, name:'이솜',age:25, addr:'제주',done:false},
        {id:3, name:'표예진',age:22, addr:'부산',done:true},
        {id:4, name:'차지연',age:30, addr:'울산',done:false},
        {id:5, name:'김의성',age:40, addr:'전주',done:false},
        {id:6, name:'백현진',age:35, addr:'경기',done:true},
        {id:7, name:'이호철',age:28, addr:'경남',done:true},
        {id:8, name:'배유람',age:21, addr:'서울',done:true},
    ])
    return (
        <div className="Test16">
            <table>
                <colgroup>
                    <col className="id"/>
                    <col className="name"/>
                    <col className="age"/>
                    <col className="addr"/>
                    <col className="done"/>
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>참여여부</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.addr}</td>    
                            <td>{item.done}</td>    
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Test16;