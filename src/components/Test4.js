import React from 'react';
import './Test4.css'

const Test4 = () => {
    return (
        <div>
            <h2>외부 css 가져오기 - className</h2>
            <div className="Test4">
                <article>test1</article>
                <article>test2</article>
                <article>test3</article>
                <article>test4</article>
            </div>
        </div>
    );
};

export default Test4;