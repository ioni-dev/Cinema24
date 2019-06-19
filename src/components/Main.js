import React from 'react';
import { Link } from 'react-router';
import '../Css/MainStyle.css';


class Main extends React.Component{
    
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li className="item1"><Link to="/">Cinema24</Link></li>
                        <li className="item2"><Link to="/About">About</Link></li>
                        <li>                    
                               <div class="dropdown">
                                       <button class="dropbtn">Register / Login</button>
                                  <div class="dropdown-content">
                                     <li ><Link to="/login">Login</Link></li>
                                     <li><Link to="/register">Register</Link></li>
                                  </div>
                                </div>
                        </li>
                        <li className="item5"> <input type="search" placeholder='search movies' onChange={this.props.onSearchChange} />
                            <button onClick={() => this.props.onRequestMovies(this.props.searchField) }><Link to="/search"> fetch movies</Link></button>
                            </li>
                        
                      
                    </ul>

                </nav>
                    {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}  

export default Main;