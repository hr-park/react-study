import React from 'react';
import FriendItem from './FriendItem'

const FriendList = ({friends, onRemove}) => {
    return (
        <ul>
             {friends.map(friend => <FriendItem key={friend.id} friend={friend}  onRemove={onRemove} /> )}  
        </ul>
    );
};

export default FriendList;