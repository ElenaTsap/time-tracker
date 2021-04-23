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
/* import { StateHolder } from '../MyContext'; */
import { getTimeStamp, dateFormatter, getTime } from '../components/Tools'

const Dashboard = ({currentUser, setLoggedIn}) => {
    const context = useContext(ContextCreator);
    const [currentProject, setCurrentProject] = useState(null);
    const [logData, setLogData] = useState([]);
    const [startTime, setStartTime] = useState(null)

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
            if (context.timerOn === false) {
                context.setTimerOn(true)
                setStartTime(getTime());
            } else {
                context.setTimerOn(false);
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

    useEffect(() => {
        ApiToGo.post([...logData])
                .then(res => {console.log(res);})
                .catch(error => {console.log(error)});
        }, [logData]);

// used both in Projects and Charts so leave it here
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
                
{/*                 <StateHolder> */}
                    <CurrentProject 
                        currentProject = {currentProject} 
                        timerHandler = {timerHandler}
                    />
{/*                 </StateHolder> */}

                <Navbar/>

                <Switch>

                    <Route exact path='/logs'>
                        <Logs
                            logData = {logData}
                            setLogData = {setLogData}
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
                            totalProjectTimes = {totalProjectTimes}
                            currentUser={currentUser} 
                            currentProject = {currentProject}
                            setCurrentProject = {setCurrentProject} 
                            timerHandler = {timerHandler}
                        />
                    </Route>
                </Switch>
            </div>
    )
}

export default Dashboard


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