import React from 'react';
import cat0 from '../assets/images/cat0.jpg'
import cat1 from '../assets/images/cat1.jpg'
import cat2 from '../assets/images/cat2.jpg'

const Test7 = () => {
    return (
        <div>
            <h2>이미지 불러오기</h2>
            {/* src안에 이미지는 import하고 참조변수를 사용한다 */}
            {/* public 안에 ./불러올수있다 */}
            <img src={cat0} alt=""  />
            <img src={cat1} alt=""  />
            <img src={cat2} alt=""  />
            <hr/>
            <img src="./images/item-1.jpg" alt="" />
            <img src="./images/item-2.jpg" alt="" />
        </div>
    );
};

export default Test7;