import React from 'react';
import MovieCard from './MovieCard';

class MovieGrid extends React.Component{
    render(){
        return(
            <div>

                {this.props.movies.map((list, i, arr) => <MovieCard movieElement={list}/>)} 
            </div>
        )
    }
} 

export default MovieGrid;