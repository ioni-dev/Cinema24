import React from 'react';
import MovieGrid from './MovieGrid';
class Main extends React.Component{
    
    render(){
        return(
            <div>
                    <input type="search" placeholder='search movies'
                      onChange={this.props.onSearchChange} />
                    <button onClick={() => this.props.onRequestMovies(this.props.searchField) }> fetch movies</button> 
                {React.cloneElement(this.props.children, this.props)}
                <MovieGrid movies={this.props.movies}/>
            </div>
        );
    }
}  

export default Main;