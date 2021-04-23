import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { StateHolder } from './MyContext';

function App() {
const [currentUser, setCurrentUser] = useState(localStorage.getItem('current-user'));
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
        <Route exact path='/register'>
            {registered ? <Redirect to="/" /> : <Register setRegistered={setRegistered}/>}
        </Route>
        <Route path='/'>
          {
            loggedIn ?
            <StateHolder>
              <Dashboard 
                currentUser = {currentUser} 
                setLoggedIn = {setLoggedIn}
              />
            </StateHolder>

            :<Login 
              setCurrentUser = {setCurrentUser} 
              setLoggedIn = {setLoggedIn}
              />
          }
        </Route>

      </Switch>
    </div>
  );
}

export default App;