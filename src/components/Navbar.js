import React from 'react';
import { Link } from 'react-router';
import '../Css/navbar.css';

const Navbar = (props) => {
      const { onSearchChange, onRequestMovies, searchField } = props.properties;
    return (
            <div className="topnav" id="myTopnav">
                
                <a className="item1"><Link to="/">Cinema24</Link></a>
                <a className="item2"><Link to="/About">About</Link></a>
                <a> <div className="dropdown">
                        <button className="dropbtn">Register / Login</button>
                          <div className="dropdown-content">
                                <a><Link to="/login">Login</Link></a>
                                <a><Link to="/register">Register</Link></a>
                          </div>
                      </div>
                </a>
                <a><input type="search" placeholder='search movies' onChange={onSearchChange} /></a>
                <a> <button onClick={() => onRequestMovies(searchField) }><Link to="/search"> fetch movies</Link></button></a>
                <a href="javascript:void(0);" className="icon" onClick="hamburger"> <i className="fa fa-bars"></i></a>
        </div> 
                 
              
    )
}

export default Navbar;

  

