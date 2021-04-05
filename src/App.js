import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import { useState } from 'react';
//data structure

let users = [
  {
    userName: 'Mario',
    password: '123'
  },
  {
    userName: 'Luigi',
    password: '456'
  }
]

function App() {
const [currentUser, setCurrentUser] = useState(null);
const [loggedIn, setLoggedIn] = useState(false);


const currentUserHandler = (userName) => {
  setCurrentUser(userName);
  console.log('currentUser', currentUser);
}

const loginSetter = (isLoggedIn) => {
  setLoggedIn(isLoggedIn);
}


  return (
    <div className="App">
      {
        loggedIn ?
        <Dashboard currentUser = {currentUser} setLoggedIn = {setLoggedIn}/>
        :<Login users = {users} userSetter = {currentUserHandler} loginSetter = {loginSetter}/>
      }

    </div>
  );
}

export default App;