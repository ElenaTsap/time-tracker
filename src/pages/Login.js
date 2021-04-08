import './Login.css';
import { useState } from 'react';
import ApiToGo from "api-to-go"
import {NavLink} from "react-router-dom";

const Auth = ({ setLoggedIn, setCurrentUser }) => {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const loginHandler = (e) => {
        e.preventDefault();

        ApiToGo.login(email, pass).then(res =>
            {
                console.log('res', res);
                if (res !== null) {
                    console.log('loggedIN!');
                    setLoggedIn(true);
                    setCurrentUser(email);
                }
            }).catch(error => {alert(error)});
    }

    return (
        <section className='login-container'>
            <div>
                <h1>Login</h1>
                <form id='form-container' onSubmit={loginHandler}>
                    <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br/>
                    <input type='text' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
                    <button type='submit'>Log in</button> 
                </form>
                <h4>New user? <NavLink exact to = "/register">Register</NavLink></h4>
            </div>
        </section>
    )
}

export default Auth