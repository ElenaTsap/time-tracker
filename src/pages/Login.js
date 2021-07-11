import './Login.css';
import { useState } from 'react';
import ApiToGo from "api-to-go"
import {NavLink} from "react-router-dom";
import clock from '../assets/Clock.png';
import girl from '../assets/Girl-time-tracker.png';

const Auth = ({ setLoggedIn, setCurrentUser }) => {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const loginHandler = (e) => {
        e.preventDefault();

        ApiToGo.login(email, pass).then(res =>
            {
                console.log('res.status', res.status);
                if (res.status !== 'failed') {
                    console.log('loggedIN!');
                    setLoggedIn(true);
                    setCurrentUser(email);
                    localStorage.setItem('current-user', email);
                } else {
                    alert(res.message)
                }
            }).catch(error => {alert(error)});
    }

    return (
        <section className='auth-container'>
            <h1>Time-tracker</h1>
            <div>
                <h1>Log In</h1>
                <form className='form-container' onSubmit={loginHandler}>
                    <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br/>
                    <input type='password' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
                    <button type='submit'>LOG IN</button> 
                </form>
                <h4>New user? <NavLink exact to = "/register" className ='nav-link'>Register</NavLink></h4>
            </div>
            <img src={clock} alt="clock" />
            <img src={girl} alt="girl" />
        </section>
    )
}

export default Auth