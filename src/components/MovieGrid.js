import React from 'react';
import MovieCard from './MovieCard';
import Home from './Home';
import '../Css/movieGridStyle.css';

class MovieGrid extends React.Component{
    
    render(){
        console.log(this.props)
        const { movies } = this.props;
        if( movies.length !== 0){
        return(
            <div className="card-grid" >

                {this.props.movies.map((list, i) => <MovieCard {...this.props} key={i} i={i} list={list} />)} 
                
                <button className="page" onClick={() => this.props.onBothFunction(this.props.pageNumber)} >{this.props.pageNumber}</button>
                   <span key={this.props.pageNumber} className="pageNumber">next</span>
            </div>
        )
        }else{
            return(
                <Home />
            )
        }
    }
} 

export default MovieGrid;