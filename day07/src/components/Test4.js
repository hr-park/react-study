import React from 'react'
import './Test4.css'
import myStyle from './Test4.module.css'

const Test4 = () => {
    return (
        <div className="wrap">
            <div className="box"></div>
            <div className={myStyle.box}></div>

            {/* 다중클래스 */}
            <div className="size bg"></div>
            <div className={`${myStyle.size} ${myStyle.bg}`}></div>
            <div className={`size ${myStyle.bg}`}></div>

            {/* 다중클래스-배열.join('공백') */}
            <div className={[myStyle.size, myStyle.bg].join('')}></div>

            {/* 독립 클래스 : global 클래스명 */}
            <div className="mybox"></div>
        </div>
    );
};

// css module 사용이유 : 클래스의 중첩을 제거하기 위해
// 기본 css이름을 건드리지 않고 css 파일에는 같은 이름으로
export default Test4;