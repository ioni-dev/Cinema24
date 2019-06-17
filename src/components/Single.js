import React from 'react';
import { Link } from 'react-router';
import MovieGrid from './MovieGrid';
import '../Css/SingleStyle.css';

class Single extends React.Component{
    render(){
        let movieId = parseInt(this.props.params.movieId);
        const i = this.props.movies.findIndex(movie=> movie.id === movieId);
        const list = this.props.movies[i];
        return(
            <div className="singleMovie">
                        
                          <Link to={<MovieGrid/>}>
                              <img src= {`https://image.tmdb.org/t/p/w300/${list.poster_path}`} 
                               className="poster" title="Movie poster" alt="movie poster"/>
                            </Link>
                        <div className="movieInfo">
                            <h1 className="f4"> {list.title} </h1>
                             <h4> {list.release_date} </h4>
                             <h4> {list.vote_average} </h4>
                             
                             <p className="overview"> {list.overview} </p>
                             <div className="AddToList"> 
                                {/* dropdown for each movie, this display the current list for each user, the user needs to create
                                his own lists in order to display something */}
                                 <div className="dropDown">
                                    <button className="dropBtn">Your MovieList</button>
                                       <div className="dropContent"> 
                                        {/* here i need to replace with the implementation for each movie and list, also the name
                                        needs to be rendered with the list available */}
                                      {/* <a href="#" onClick={() => this.props.onRequestMovies(this.props.searchField) }></a>
                                        <a href="#" onClick={() => this.props.onRequestMovies(this.props.searchField) }></a> */}
                                    </div>
                                </div> 
                             </div>
                        </div>
                            
                </div>
        )
    }
} 

export default Single;