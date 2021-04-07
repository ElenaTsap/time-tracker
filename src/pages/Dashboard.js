import './Dashboard.css'
import Header from '../components/Header'
import CurrentProject from '../components/CurrentProject'
import Projects from './Projects';
import Logs from './Logs';
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'


const Dashboard = ({currentUser, setLoggedIn}) => {
    const [currentProject, setCurrentProject] = useState(null);
    const [logData, setLogData] = useState([/* 
        {
            projectName:'Eleni project 1',
            userName:'Eleni',
            startDate: 'Wed Mar 31 2021',
            logDurationSec:20
        },
        {
            projectName:'Marios project',
            userName:'Mario',
            startDate: 'Wed Mar 31 2021',
            logDurationSec:50
        },
        {
            projectName:'Eleni project 2',
            userName:'Eleni',
            startDate: 'Wed Mar 31 2021',
            logDurationSec:10
        },
        {
            projectName:'Luigi project 6',
            userName:'Luigi',
            startDate: 'Wed Mar 31 2021',
            logDurationSec:60
        },
        {
            projectName:'Luigi project 6',
            userName:'Luigi',
            startDate: 'Wed Mar 31 2021',
            logDurationSec:40
        },
        {
            projectName:'Eleni project 2',
            userName:'Eleni',
            startDate: 'Wed Mar 31 2021',
            logDurationSec:40
        }, */
    ])

    const dateFormatter = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let displayDate = today.toDateString();
        return displayDate;
    }

    return (
            <div className = 'dashboard-container'>
                <Header
                    currentUser={currentUser} 
                    setLoggedIn={setLoggedIn}
                />

                <CurrentProject 
                    currentProject = {currentProject} 
                    currentUser={currentUser} 
                    dataState = {{'logData': logData, 'setLogData': setLogData}}
                    dateFormatter = {dateFormatter}
                />

                <Navbar/>

                <Switch>
                    <Route path='/projects'>
                        <Projects
                        currentUser={currentUser} 
                        setCurrentProject = {setCurrentProject} 
                        dataState = {{'logData': logData, 'setLogData': setLogData}}
                        dateFormatter = {dateFormatter}
                        />
                    </Route>
                    <Route path='/logs'>
                        <Logs/>
                    </Route>
                </Switch>
            </div>
    )
}

export default Dashboard

