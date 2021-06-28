import React from 'react';
import './MelonList.css'
import MelonItem from './MelonItem'

const MelonList = ({musics, onLike, onOpen}) => {
    return (
        <div className="MelonList">
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>곡(가수) </th>
                        <th>앨범</th>
                        <th>좋아요</th>
                        <th>동영상</th>
                        <th>상승/하락</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        musics.map(music => <MelonItem key={music.id} music={music} onLike={onLike} onOpen={onOpen}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MelonList;