import './Dashboard.css'
import Header from '../components/Header'
import CurrentProject from '../components/CurrentProject'
import Projects from './Projects';
import Logs from './Logs';
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import ApiToGo from "api-to-go"


const Dashboard = ({currentUser, setLoggedIn}) => {
    const [currentProject, setCurrentProject] = useState(null);
    const [logData, setLogData] = useState([])

    const dateFormatter = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let displayDate = today.toDateString();
        return displayDate;
    }

/*     useEffect(() => {
        const getLogData = async () => {
            const res = await ApiToGo.get();
            if (res === undefined) {
                alert('hey!')
                return
            }
            setLogData(res);
            console.log('res from GET', res);
        }
        getLogData()
        }, []) */

        useEffect(() => {
            const getLogData = async () => {
                const res = await ApiToGo
                .get()
                .then(res => {
                    console.log('resres',res); 
                    setLogData(res);                 
                })
                .catch(error => {console.log(error)});
            }
            getLogData()
        }, []) 

/*     useEffect(() => {
    ApiToGo.get()
            .then(res => {console.log(res);})
            .catch(error => {console.log(error)});
    }, []); */

    useEffect(() => {
        ApiToGo.post([...logData])
                .then(res => {console.log(res); console.log(...logData);})
                .catch(error => {console.log(error)});
        }, [logData]);


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
                    <Route path='/'>
                        <Projects
                        currentUser={currentUser} 
                        setCurrentProject = {setCurrentProject} 
                        logData = {logData}
                        setLogData = {setLogData}
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

