import React from 'react';
import '../Css/MainStyle.css';
import Navbar from './Navbar';


class Main extends React.Component{
    
    render(){
        return(
            <div>
                    <Navbar properties={this.props}/>
                    {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}  

export default Main;