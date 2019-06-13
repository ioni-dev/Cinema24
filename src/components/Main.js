import React from 'react';
import { Link } from 'react-router';
import '../Css/MainStyle.css';
import MovieGrid from './MovieGrid';

class Main extends React.Component{
    
    render(){
        return(
            <nav>
                
                    <ul>
                        <li className="item1"><Link to="/">Cinema24</Link></li>
                        <li className="item2"><Link to="/About">About</Link></li>

                    <li className="item3"><Link to="/login">Login</Link></li>
                    <li className="item4"><Link to="/register">Register</Link></li>
                    <li className="item5"> <input type="search" placeholder='search movies'
                      onChange={this.props.onSearchChange} /></li>
                        <li className="item6"><button onClick={() => this.props.onRequestMovies(this.props.searchField) }> fetch movies</button> </li>
                    
                
                
                    </ul>

                {React.cloneElement(this.props.children, this.props)}
                <MovieGrid movies={this.props.movies}/>
            </nav>
        );
    }
}  

export default Main;