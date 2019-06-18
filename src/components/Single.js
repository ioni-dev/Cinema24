import React from 'react';
import { Link } from 'react-router';
import MovieGrid from './MovieGrid';
import Genres from '../common/Genre';
import '../Css/SingleStyle.css';


class Single extends React.Component{
    render(){
        let movieId = parseInt(this.props.params.movieId);
        const i = this.props.movies.findIndex(movie=> movie.id === movieId);
        const list = this.props.movies[i];
        
             /* the api response only gives you the id's for the genres, in order to
               solve this issue, i downloaded all the genres from the api in an array of obj
               an imported as a module, so here i filter thatmodule with the existing
              genres from the api rensponse and convert it to a string. Cool. */
        let movieGenres =  Genres.filter((elem) => list.genre_ids.includes(elem.id)).map(x => x.name).join(' ')
       
        return(
            <div className="singleMovie">
                        
                          <Link to={<MovieGrid/>}>
                              <img src= {`https://image.tmdb.org/t/p/w300/${list.poster_path}`} 
                               className="poster" title="Movie poster" alt="movie poster"/>
                            </Link>
                        <div className="movieInfo">
                            <h1 className="f4"> {list.title} </h1>
                            <h4>{movieGenres}</h4>
                             <h4> Release: {list.release_date} </h4>
                             <h4> Rate: {list.vote_average} </h4>
                             
                             <p className="overview"> Sipnosis: <br></br>{list.overview} </p>
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