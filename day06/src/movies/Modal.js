import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({movieid , onClose }) => {
    const { movieNm, director, thumbUrl} = movieid
    return (
        <div className="modal">
            <div className="bg"></div>
            <div className="popup">
                <h3>{movieNm} </h3>
                <div>
                    <img src={thumbUrl} alt={movieNm} />
                </div>
                <strong>감독: {director} </strong>
                <p className="close" onClick={onClose}>
                    <AiOutlineCloseCircle />
                </p>
            </div>
        </div>
    );
};

export default Modal;