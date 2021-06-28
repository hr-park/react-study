import React, { useState } from 'react';
import data from '../utils/api/movie.json'
import MovieView from './MovieView'
import MovieList from './MovieList'
import './style.css'
import Modal from './Modal';

const Movies = () => {
    const [movies , setMovies] = useState( data )
    const [movieid, setMovieid] = useState( data[0] )
    // const [movieid, setMovieid] = useState( movies[0] )
    const [isActive , setIsActive] = useState(false)


    const onOver = (id) => {
        //setMovieid( movies[id - 1 ] )
        // mnd - find / findIndex
        setMovieid( movies.find( movie => movie.rank === id ))
    }

    const onOpen = ()  => {
        setIsActive( true )
    }
    const onClose = ()  => {
        setIsActive( false )
    }

    return (
        <div className="gallery">
            <MovieView movieid={movieid} onOpen={onOpen} />
            <MovieList movies={movies} onOver={onOver} />
           {isActive && <Modal movieid={movieid} onClose={onClose} />}
        </div>
    );
};

export default Movies;