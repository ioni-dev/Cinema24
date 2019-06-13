import React from 'react';
import MovieCard from './MovieCard';
import '../Css/movieGridStyle.css';

class MovieGrid extends React.Component{
    render(){
        return(
            <div className="card-grid" >

                {this.props.movies.map((list, i) => <MovieCard {...this.props} key={i} i={i} list={list} />)} 
            </div>
        )
    }
} 

export default MovieGrid;