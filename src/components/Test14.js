import React, { useState } from 'react';

const Test14 = () => {
    const [ visible, setVisible ] = useState(false)

    const onShow  = ()  => {
        setVisible( true )
    }
    const onHide  = () => {
        setVisible(false)
    }
    const onToggle  = ()  => {
        setVisible( !visible )
    }

    return (
        <div>
            <p>
            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>
            <button onClick={onToggle}>
                { visible === true ?  '숨기기':'보이기'}
            </button>
            </p>

        {
            visible &&  <div style={{width:400,height:100,background:'tomato',margin:10}}>
            </div>
        }

           
        </div>
    );
};

export default Test14;