

/* import './App.css';
import Timer from './components/Timer'
import { useState } from 'react';

//data structure

let users = [
  {
      userId: 'u1',
      userName: 'Mario',
      password: '123'
  },
  {
    userId: 'u2',
    userName: 'Luigi',
    password: '456'
  }
]

let projects = [
  {
    projectID: 'p1',
    projectName: 'Task1'
  }
]

let logData = [
  {
    logId: '',
    startDate: '',
    startTime: '',
    endDate:'',
    endTime:'',
    userId:'',
    projectId:''
  }
]
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);

  function dataHandler(e) {
      e.preventDefault();
      console.log('all data', name, pass);

      for (let i = 0; i < users.length; i++) {
          if (name == users[i].userName && pass == users[i].password) {
              alert ('Welcome!')
              setUser(name);
              setLoggedIn(true);
              console.log('user', user);
              return;
          } 
      } 
      alert('Wrong user or password. If you are a new user please register')
  }

  function registrationHandler() {
      alert('register!')
      console.log('from reg data', name, pass);

      for (let i = 0; i < users.length; i++) {
          if (name == users[i].userName) {
              alert ('This username is taken! please choose another one!')
              return;
          } 
      } 

      users.push({
          userId: 'u1',
          userName: name,
          password: pass
      })
      console.log(users);

      setUser(name);
      setLoggedIn(true);
      console.log('user', user);
  }


  return (
    <div className="App">
      <section className='login-container'>
            {
            loggedIn ?
            <h1>Welcome {user}!</h1> 
            :<div><h1>Login</h1>
            <h4>Enter your details to continue</h4>
            <form onSubmit={dataHandler}>
                <input type='text' placeholder='username' onChange={(e)=>setName(e.target.value)}/> <br/>
                <input type='text' placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
                <button type='submit'>Log in</button> 
            </form>
            <h4>New user?</h4>
            <button onClick={registrationHandler}>Register</button></div>
            }
        </section>
      <Timer logData = {logData}/>
    </div>
  );
}

export default App;

 */