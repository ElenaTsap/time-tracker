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
    const [logData, setLogData] = useState([]);
    const [timerOn, setTimerOn] = useState(false);
    const [totalSeconds, setTotalSeconds] = useState(0)


    const dateFormatter = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let displayDate = today.toDateString();
        return displayDate;
    }

    const timeFormatter = (totalSeconds) => {
        let seconds = ((totalSeconds)%60);
        let minutes =  (Math.floor(totalSeconds/60)%60);
        let hours = (Math.floor(totalSeconds/3600));

        if (minutes <= 9) {
            if (seconds <= 9) {
                return (`${hours}:0${minutes}:0${seconds}`)
            } else {
                return (`${hours}:0${minutes}:${seconds}`)
            }
        } else {
            if (seconds <= 9) {
                return (`${hours}:${minutes}:0${seconds}`)
            } else {
                return (`${hours}:${minutes}:${seconds}`)
            }
        }
    }

    useEffect(() => {
        ApiToGo.get().then(res =>
            {
                setLogData(res[0]);
                console.log('from else',res[0])

            }).catch(error => {
            console.log(error)
            });
        }, []);

    const timerHandler = () => {
        /*  setTimerOn(prevTimerOn => !prevTimerOn) */
            if (timerOn === false) {
                setTimerOn(true)
            } else {
                setTimerOn(false)
                setLogData([...logData, {
                    projectName: currentProject,
                    userName: currentUser,
                    startDate: dateFormatter(),
                    logDurationSec:totalSeconds
                }]);
            }
        }

/*     useEffect(() => {
        const getLogData = async () => {
            const res = await ApiToGo
            .get()
            .then(res => {
                console.log('res from get',res[0]);
                setLogData(res[0]);                 
            })
            .catch(error => {console.log(error)});
        }
        getLogData()
    }, [])  */

    useEffect(() => {
        ApiToGo.post([...logData])
                .then(res => {console.log(res);})
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
                    timerOn = {timerOn}
                    timerHandler = {timerHandler}
                    totalSeconds = {totalSeconds}
                    setTotalSeconds = {setTotalSeconds}
                />

                <Navbar/>

                <Switch>

                    <Route exact path='/logs'>
                        <Logs
                            logData = {logData}
                            timeFormatter = {timeFormatter}
                        />
                    </Route>

                    <Route exact path='/charts'>
                        lol
                    </Route>

                    <Route path='/'>
                        <Projects
                            logData = {logData}
                            setLogData = {setLogData}
                            dateFormatter = {dateFormatter}
                            currentUser={currentUser} 
                            currentProject = {currentProject}
                            setCurrentProject = {setCurrentProject} 
                            timerOn = {timerOn}
                            timerHandler = {timerHandler}
                            timeFormatter = {timeFormatter}
                        />
                    </Route>
                </Switch>
            </div>
    )
}

export default Dashboard

