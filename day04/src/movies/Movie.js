import React, { useState } from 'react';
import '../assets/css/reset.css'
import MovieList from './MovieList';
import './style.css'
import movie from '../assets/api/moive'

const Movie = () => {
    const [data , setData] = useState( movie )

    const onDel = ( id )  => {
        setData( data.filter( item => item.no !== id ))
    }

    return (
        <div className="wrap">
            <h2>영화 추천 리스트</h2>
            <MovieList data={data} onDel={onDel} />
        </div>
    );
};

export default Movie;