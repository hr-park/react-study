import React, { useState } from 'react';
import './Melon.css'
import data from '../utils/api/music'
import MelonList from './MelonList';
import MelonForm from './MelonForm';
import Modal from './Modal'

const Melon = () => {
    const [musics, setMusics] = useState(data)
    const [isActive, setIsActive] = useState(false)
    const [music, setMusic] = useState({})

    const onSearch = (text) => {
        const newData = data.filter(item => {
            const re = new RegExp(text, 'ig') // 대소문자 구별 안하겠다. 정규식
            return item.title.match(re)
        })
        setMusics(newData)
    }

    const onLike = (id) => {
        setMusics(musics.map(music => music.id === id ?
                            {...music,
                            like:music.done ?
                                music.like + 1:music.like
                                -1,
                                done:!music.done} : music)
                )
        }

    const getdate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const date = now.getDate()

        const msg = `${year}. ${month}`
        return msg
    }

    const onOpen = (id) => {
        setIsActive(true)
        setMusic(musics[id-1])
    }
    
    const onClose = () => {
        setIsActive(false)
    }
    return (
        <div className="Melon">
            <h2>Melon {getdate()} 인기차트</h2>
            <MelonForm onSearch={onSearch} />
            <MelonList musics={musics} onLike={onLike} onOpen={onOpen} />
            {
                isActive && <Modal onClose={onClose} music={music} />
            }
        </div>
    );
};

export default Melon;