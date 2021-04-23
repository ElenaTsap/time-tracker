import './Dashboard.css'
import Header from '../components/Header'
import CurrentProject from '../components/CurrentProject'
import Projects from './Projects';
import Logs from './Logs';
import Charts from './Charts';
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import ApiToGo from "api-to-go"
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'

const Dashboard = ({currentUser, setLoggedIn}) => {
    const context = useContext(ContextCreator);
    const [currentProject, setCurrentProject] = useState(null);
    const [logData, setLogData] = useState([]);
    const [timerOn, setTimerOn] = useState(false);
    const [startTime, setStartTime] = useState(null)

    
    const getTimeStamp = () => {
        let timeStamp = new Date().getTime();
        return timeStamp
    }

    const dateFormatter = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let displayDate = today.toDateString();
        return displayDate;
    }

    const getTime = () => {
        
        let date = new Date(getTimeStamp());
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime
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
                setStartTime(getTime());
            } else {
                setTimerOn(false);
                setLogData([...logData, {
                    id: getTimeStamp(),
                    projectName: currentProject,
                    userName: currentUser,
                    startDate: dateFormatter(),
                    startTime: startTime,
                    endTime: getTime(),
                    logDurationSec:context.totalSeconds
                }]);
                setStartTime(null)
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


        
const totalProjectTimes = [];
    
    logData.forEach(project => {
        let foundProject = totalProjectTimes.find(totalProject => {
            return totalProject.projectName === project.projectName
        })
        if (foundProject !== undefined) {
            foundProject.totalDurationSec += project.logDurationSec;
            foundProject.lastTrackedDate = project.startDate;
        } else {
            totalProjectTimes.push({projectName: project.projectName, startDate: project.startDate, lastTrackedDate: project.startDate, totalDurationSec: project.logDurationSec})
        }
    })

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
                />


                <Navbar/>

                <Switch>

                    <Route exact path='/logs'>
                        <Logs
                            logData = {logData}
                            setLogData = {setLogData}
                            timeFormatter = {timeFormatter}
                        />
                    </Route>

                    <Route exact path='/charts'>
                        <Charts 
                        /*     totalProjectTimes = {totalProjectTimes} */
                        />
                    </Route>

                    <Route path='/'>
                        <Projects
                            logData = {logData}
                            setLogData = {setLogData}
                            dateFormatter = {dateFormatter}
                            totalProjectTimes = {totalProjectTimes}
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

