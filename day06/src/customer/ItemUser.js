import React from 'react';

const ItemUser = ({user, onRemove, onModify}) => {
    const { id, name, addr } = user

    return (
        <tr>
           <td>{name} </td> 
           <td>{addr} </td> 
           <td>
               <button onClick={() => onModify(user)}>수정</button>
               <button onClick={() => onRemove(id)}>삭제</button>
           </td> 
        </tr>
    );
};

export default ItemUser;