import React from 'react';
import '../Css/loginStyle.css';
const Login = () => {
    return(
        <div>
            <div class="user">
                <header class="user__header">
                    <h1 class="user__title">Login</h1>
                </header> 
    
                <form class="form">     
                    <div class="form__group">
                         <input type="email" placeholder="Email" class="form__input" />
                    </div>
                    <div class="form__group">
                         <input type="password" placeholder="Password" class="form__input" />
                    </div>
                        <button class="btn" type="button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;