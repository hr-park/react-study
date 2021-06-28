import React from 'react';
import Numeral from "numeral";
import { AiOutlineArrowUp, AiOutlineArrowDown,AiOutlineEllipsis} from "react-icons/ai";

const MovieItem = ({movie, onOver}) => {
    const {movieNm,rank,salesAmt, audiCnt, rankInten } = movie 
    return (
        <tr onMouseOver={() => onOver(rank)}>
            <td>{rank} </td>
            <td>{movieNm} </td>
            <td>{Numeral(salesAmt).format(0,0)}</td>
            <td>{Numeral(audiCnt).format(0,0)} </td>
            <td>
                {rankInten > 0 &&  <AiOutlineArrowUp color="red" /> }
                {rankInten < 0 &&  <AiOutlineArrowDown color="blue" /> }
                {rankInten === 0 &&  <AiOutlineEllipsis style={{color:"green"}}/>}
                {rankInten}
            </td>
        </tr>
    );
};

export default MovieItem;