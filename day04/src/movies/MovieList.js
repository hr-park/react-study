import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data, onDel}) => {
    return (
        <div className="movie">
            {
                data.map( item => <MovieItem key={item.no} 
                                   item={item} onDel={onDel} />)
            }
        </div>
    );
};

export default MovieList;