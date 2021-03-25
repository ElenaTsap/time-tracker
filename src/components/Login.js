import './Login.css';
import { useState } from 'react';

export default function (props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [pass, setPass] = useState(null);

    function loginHandler(e) {
        e.preventDefault();
        console.log('all data', userName, pass);

        for (let i = 0; i < props.users.length; i++) {
            if (userName == props.users[i].userName && pass == props.users[i].password) {
                setLoggedIn(true);
                props.loginSetter(true);
                props.userSetter(userName);
                return;
            } 
        } 
        alert('Wrong user or password. If you are a new user please register')
    }

    function registrationHandler() {
        for (let i = 0; i < props.users.length; i++) {
            if (userName == props.users[i].userName) {
                alert ('Username already taken!')
                return;
            } 
        } 

        props.users.push({
            userName: userName,
            password: pass
        })

        setLoggedIn(true);
        props.loginSetter(true);
        props.userSetter(userName);
    }

    return (
        <section className='login-container'>
            {
            loggedIn ?
            <h1>Your dashboard {userName}!</h1>
            :<div><h1>Login</h1>
            <form id='form-container' onSubmit={loginHandler}>
                <input type='text' placeholder='username' onChange={(e)=>setUserName(e.target.value)}/> <br/>
                <input type='text' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
                <button type='submit'>Log in</button> 
            </form>
            <h4>New user?</h4>
            <button id='register-button' onClick={registrationHandler}>Register</button></div>
            }
        </section>
    )
}