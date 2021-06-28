import React from 'react';
import ItemUser from './ItemUser'

const ListUser = ({users, onRemove, onModify}) => {
    return (
        <div>
           <h2 className="users">모범택시 고객 리스트</h2> 
           <table>
               <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
               </colgroup>
               <thead>
                   <tr>
                       <th>이름</th>
                       <th>주소</th>
                       <th>관리</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       users.map( user => <ItemUser key={user.id}  user={user} onRemove={onRemove} onModify={onModify} /> )
                   }
                    
               </tbody>
           </table>
        </div>
    );
};

export default ListUser;