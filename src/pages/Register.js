import './Login.css';
import { useState } from 'react';
import ApiToGo from "api-to-go"
import {NavLink} from "react-router-dom";
import clock from '../assets/Clock.png';
import girl from '../assets/Girl-time-tracker.png';

const Auth = ({setRegistered}) => {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const registrationHandler = (e) => {
        e.preventDefault();
        ApiToGo.register(email, pass).then(res =>
            {
                if (res === 'success') {
                    setRegistered(true);
                    console.log('res', res);
                }
            }).catch(error => {alert(error)});
    }

    return (
        <section className='auth-container'>
            <h1>Time-tracker</h1>
            <div>
                <h1>Register</h1>
                <form className='form-container' onSubmit={registrationHandler}>
                    <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br/>
                    <input type='password' placeholder='password' minlength="8"  onChange={(e)=>setPass(e.target.value)}/>
                    <button type='submit'>Register</button> 
                </form>
                <h4>Already a user? <NavLink exact to = "/" className ='nav-link'>Login</NavLink></h4>
            </div>
            <img src={clock} alt="clock" />
            <img src={girl} alt="girl" />
        </section>
    )
}

export default Auth