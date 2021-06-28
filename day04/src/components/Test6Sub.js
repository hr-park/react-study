import React from 'react';

const Test6Sub = ({onDel, onInsert}) => {
    return (
        <div>
            <p>
                {/* 함수(값) 바로쓸수 없다 - 함수로 한번묶어준다  */}
                {/* 부모에게 값을 전달 -콜백형식 {()=>xxxx(값)} */}
                <button onClick={() => onDel(4)  }>삭제 이효리</button>
                <button onClick={() => onDel(5)}>삭제 고민시</button>
            </p>
            <p>
                <button onClick={() => onInsert('제시')}>제시</button>
                <button onClick={() => onInsert('엄정화')}>엄정화</button>
                <button onClick={() => onInsert('나나')}>나나</button>
            </p>
        </div>
    );
};

export default Test6Sub;