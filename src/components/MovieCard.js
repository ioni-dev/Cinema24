import React from 'react';
import { Link } from 'react-router';
import '../Css/movieGridStyle.css';

class MovieCard extends React.Component{
    render() {
        const { list, i } = this.props;
        
        return(
            <div className="card" key={i} >
                        <div className="tc">
                            <Link to={`/view/${list.id}`}>
                              <img src= {`https://image.tmdb.org/t/p/w185/${list.poster_path}`} 
                               className="dib" title="Movie poster" alt="movie"/>
                            </Link>
           {/*                   <h1 className="f4"> {list.title} </h1>
                             <h4> {list.release_date} </h4>
                             <h4> {list.vote_average} </h4>
                             <hr></hr>
                             
                             <p className="overview"> {list.overview} </p>
                            </div>
                            <div className="AddToList"> */}
                                {/* dropdown for each movie, this display the current list for each user, the user needs to create
                                his own lists in order to display something */}
                               {/*  <div className="dropDown">
                                    <button className="dropBtn">Your MovieList</button>
                                    <div className="dropContent"> */}
                                        {/* here i need to replace with the implementation for each movie and list, also the name
                                        needs to be rendered with the list available */}
                 {/*                        <a href="#" onClick={() => this.props.onRequestMovies(this.props.searchField) }></a>
                                        <a href="#" onClick={() => this.props.onRequestMovies(this.props.searchField) }></a>
                                    </div>
                                </div> */}
                            </div>
            </div>
        )
    }
}

export default MovieCard;