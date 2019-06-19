import React from 'react';
import '../Css/homeStyle.css';

const Home = () => {
    return(
        <div className="container">
            <img src="https://res.cloudinary.com/dbykiqk33/image/upload/v1560821313/breath.jpg" alt="poster" className="mainPoster"></img>
            <div className="subContainer">
                <p className="title">Cinema24</p>
                <p className="phrase">
                    This is made for all the people that love films <br></br> you can create lists for every emotion you feel
                    for any situation<br></br>inside of those you can save you movies
                </p>    
            </div>
        </div>
    )
}

export default Home;