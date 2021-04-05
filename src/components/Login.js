import './Login.css';
import { useState } from 'react';

const Login = ({users, loginSetter, userSetter}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [pass, setPass] = useState(null);

    const loginHandler = (e) => {
        e.preventDefault();
        console.log('all data', userName, pass);

        for (let i = 0; i < users.length; i++) {
            if (userName === users[i].userName && pass === users[i].password) {
                setLoggedIn(true);
                loginSetter(true);
                userSetter(userName);
                return;
            } 
        } 
        alert('Wrong user or password. If you are a new user please register')
    }

    const registrationHandler = () => {
        for (let i = 0; i < users.length; i++) {
            if (userName === users[i].userName) {
                alert ('Username already taken!')
                return;
            } 
        } 

        users.push({
            userName: userName,
            password: pass
        })

        setLoggedIn(true);
        loginSetter(true);
        userSetter(userName);
    }

    return (
        <section className='login-container'>
            {
            !loggedIn &&
            <div>
                <h1>Login</h1>
                <form id='form-container' onSubmit={loginHandler}>
                    <input type='text' placeholder='username' onChange={(e)=>setUserName(e.target.value)}/> <br/>
                    <input type='text' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
                    <button type='submit'>Log in</button> 
                </form>
                <h4>New user?</h4>
                <button id='register-button' onClick={registrationHandler}>Register</button>
            </div>
            }
        </section>
    )
}

export default Login