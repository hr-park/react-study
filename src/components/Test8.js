import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    return (
        <div>
           <Test8Sub 
                name="홍길동"
                age = {30}
                addr ="서울"
                tel ="010-1111-2222"
                color ="tomato"
                done={true}
           /> 

            <Test8Sub                                
                addr ="제주"
                tel ="010-1111-333"
                color ="skyblue"
                done={false}
           /> 

           <Test8Sub />

        </div>
    );
};

export default Test8;