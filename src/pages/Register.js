import './Login.css';
import { useState } from 'react';
import ApiToGo from "api-to-go"
import {NavLink} from "react-router-dom";

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
        <section className='login-container'>
            <div>
                <h1>Register</h1>
                <form id='form-container' onSubmit={registrationHandler}>
                    <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br/>
                    <input type='text' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
                    <button type='submit'>Register</button> 
                </form>
                <h4>Already a user? <NavLink exact to = "/">Login</NavLink></h4>
            </div>
        </section>
    )
}

export default Auth