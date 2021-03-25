import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import Clock from './components/Clock'
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

let logData = [
  {
    projectName:'Eleni project 1',
    userName:'Eleni',
    startDate: '15.Jan.21',
    endDate: '',
    startTime: '',
    endTime:'',
    displayDuration:'0:00:45'
  },
  {
    projectName:'Marios project',
    userName:'Mario',
    startDate: '03.Jan.21',
    endDate: '',
    startTime: '',
    endTime:'',
    displayDuration:'0:30:45'
  },
  {
    projectName:'Eleni project 2',
    userName:'Eleni',
    startDate: '01.Jan.21',
    endDate: '',
    startTime: '',
    endTime:'',
    displayDuration:'0:39:45'
  },
  {
    projectName:'Luigi project 6',
    userName:'Luigi',
    startDate: '01.Jan.21',
    endDate: '',
    startTime: '',
    endTime:'',
    displayDuration:'0:39:45'
  }
]

function App() {
const [currentUser, setCurrentUser] = useState(null);
const [loggedIn, setLoggedIn] = useState(false);

function currentUserHandler(userName) {
  setCurrentUser(userName);
  console.log('currentUser', currentUser);
}

function loginSetter(isLoggedIn) {
  setLoggedIn(isLoggedIn);
}

console.log('2. currentUser', currentUser);

  return (
    <div className="App">
      {
        loggedIn ?
        <Dashboard logData = {logData} currentUser = {currentUser}/>
        :<Login users = {users} userSetter = {currentUserHandler} loginSetter = {loginSetter}/>
      }
{/*       <Clock/> */}
    </div>
  );
}

export default App;