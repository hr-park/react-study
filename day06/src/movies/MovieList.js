import React from 'react';
import MovieItem from './MovieItem'

const MovieList = ({movies, onOver}) => {
    return (
        <div className="list">
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                </colgroup>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>영화명</th>
                        <th>매출액</th>
                        <th>관객수</th>
                        <th>증감률</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map( movie =>  <MovieItem key={movie.rank} 
                                               movie={movie} onOver={onOver} /> )
                    }
                   
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;