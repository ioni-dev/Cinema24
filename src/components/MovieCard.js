import React from 'react';

class MovieCard extends React.Component{
    render() {
        const { movieElement } = this.props;
        return(
            <div className="card-grid" key={movieElement.id} id={movieElement} >
                        <div className="tc">
                             <img src= {`https://image.tmdb.org/t/p/w342/${movieElement.poster_path}`} className="dib" title="Movie poster" alt="movie"/>
                             <h1 className="f4"> {movieElement.title} </h1>
                             <h4> {movieElement.release_date} </h4>
                             <h4> {movieElement.vote_average} </h4>
                             <hr></hr>
                             
                             <p className="overview"> {movieElement.overview} </p>
                            </div>
                            <div className="AddToList">
                                {/* dropdown for each movie, this display the current list for each user, the user needs to create
                                his own lists in order to display something */}
                                <div className="dropDown">
                                    <button className="dropBtn">Your MovieList</button>
                                    <div className="dropContent">
                                        {/* here i need to replace with the implementation for each movie and list, also the name
                                        needs to be rendered with the list available */}
                                        <a href="#" onClick={() => this.props.onRequestMovies(this.props.searchField) }></a>
                                    </div>
                                </div>
                            </div>
            </div>
        )
    }
}

export default MovieCard;