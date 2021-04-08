import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
const [currentUser, setCurrentUser] = useState(null);
const [loggedIn, setLoggedIn] = useState(false);
const [registered, setRegistered] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('api-to-go');
  if (token !== null) {
    setLoggedIn(true);
  }
}, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          {
            loggedIn ?
            <Dashboard 
              currentUser = {currentUser} 
              setLoggedIn = {setLoggedIn}
            />
            :<Login 
              setCurrentUser = {setCurrentUser} 
              setLoggedIn = {setLoggedIn}
              />
          }
        </Route>
        <Route exact path='/register'>
            {registered ? <Redirect to="/" /> : <Register setRegistered={setRegistered}/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;