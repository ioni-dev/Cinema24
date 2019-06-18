import React from 'react';
import '../Css/homeStyle.css';

const Home = () => {
    return(
        <div className="container">
            <img src="https://res.cloudinary.com/dbykiqk33/image/upload/v1560821313/breath.jpg" alt="poster" className="mainPoster"></img>
            <div className="subContainer">
                <h1>With Cinema24 you can create list for your favorite movies!</h1>
                <h4>Create categories for special occasions</h4>
                </div>
        </div>
    )
}

export default Home;