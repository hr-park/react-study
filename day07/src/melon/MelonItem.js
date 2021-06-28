import React from 'react';
import { FcLikePlaceholder,FcLike, FcVideoCall } from "react-icons/fc";
import { AiOutlineCaretUp,AiOutlineCaretDown, AiOutlineMinus} from "react-icons/ai";


const MelonItem = ({music, onLike, onOpen}) => {
    const {rank, id, poster, title, singer, album, like, done, state} = music
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt="" width="50" />
                <p><span>{title}</span>{singer}</p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={()=>onLike(id)}>
                    {
                        done ? <FcLike /> : <FcLikePlaceholder />
                    }
                </i>
                {like}
            </td>
            <td>
                <i onClick={()=>onOpen(id)}>
                    <FcVideoCall />
                </i>
            </td>
            <td>
                <i>
                    {state === '상승' && <AiOutlineCaretUp color="red" />}
                    {state === '하강' && <AiOutlineCaretDown color="blue" />}
                    {state === '유지' && <AiOutlineMinus />}
                </i>
            </td>
        </tr>
    );
};

export default MelonItem;