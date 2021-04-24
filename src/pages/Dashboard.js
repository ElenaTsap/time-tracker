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
import { StateHolder } from '../MyContext';
import { getTimeStamp, dateFormatter, getTime } from '../components/Tools'

const Dashboard = ({currentUser, setLoggedIn}) => {
    const context = useContext(ContextCreator);

    useEffect(() => {
        ApiToGo.get().then(res =>
            {
                context.setLogData(res[0]);
                console.log('from else',res[0])

            }).catch(error => {
            console.log(error)
            });
        }, []);

    const timerHandler = () => {
        /*  setTimerOn(prevTimerOn => !prevTimerOn) */
            if (context.timerOn === false) {
                context.setTimerOn(true)
                context.setStartTime(getTime());
            } else {
                context.setTimerOn(false);
                context.setLogData([...context.logData, {
                    id: getTimeStamp(),
                    projectName: context.currentProject,
                    userName: currentUser,
                    startDate: dateFormatter(),
                    startTime: context.startTime,
                    endTime: getTime(),
                    logDurationSec:context.totalSeconds
                }]);
                context.setStartTime(null)
            }
        }

    useEffect(() => {
        ApiToGo.post([...context.logData])
                .then(res => {console.log(res);})
                .catch(error => {console.log(error)});
        }, [context.logData]);

// used both in Projects and Charts so leave it here
const totalProjectTimes = [];
    
    context.logData.forEach(project => {
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
                        /* currentProject = {currentProject}  */
                        timerHandler = {timerHandler}
                    />

                <Navbar/>

                <Switch>

                    <Route exact path='/logs'>
                        <Logs/>
                    </Route>

                    <Route exact path='/charts'>
                        <Charts 
                            totalProjectTimes = {totalProjectTimes}
                        />
                    </Route>

                    <Route path='/'>
                        <Projects
                            totalProjectTimes = {totalProjectTimes}
                            currentUser={currentUser} 
/*                             currentProject = {currentProject}
                            setCurrentProject = {setCurrentProject}  */
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