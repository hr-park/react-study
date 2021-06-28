import React from 'react';
import './Modal.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


const Modal = ({onClose, music}) => {
    const {title, key, singer} = music
    return (
        <div className="Modal">
            <div className="bg"></div>
            <div className="popup">
                <h2>노래명 : {title}</h2>
                <div>
                    <iframe width="807" height="454" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" allowfullscreen></iframe>
                </div>
                <p>가수 : {singer}</p>
                <span onClick={onClose}>
                    <i>
                        <AiOutlineCloseCircle />
                    </i>
                </span>
            </div>
        </div>
    );
};

export default Modal;