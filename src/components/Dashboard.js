import './Dashboard.css'
import Header from './Header'
import CurrentProject from '../components/CurrentProject'
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react';
import Projects from './Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import React from 'react'

const Dashboard = ({currentUser, setLoggedIn}) => {
    const [currentProject, setCurrentProject] = useState(null);
    const [newProject, setNewProject] = useState('')
    const [logData, setLogData] = useState([
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
        },
    ])

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

    const dateFormatter = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let displayDate = today.toDateString();
        return displayDate;
    }

    const currentUserProjectsArray = logData.filter(log => log.userName === currentUser)

    const totalProjectTimes = [];

    currentUserProjectsArray.forEach(project => {
        let foundProject = totalProjectTimes.find(totalProject => {
            return totalProject.projectName === project.projectName
        })
        if (foundProject !== undefined) {
            foundProject.totalDurationSec += project.logDurationSec;
        } else {
            totalProjectTimes.push({projectName: project.projectName, startDate: project.startDate, totalDurationSec: project.logDurationSec})
        }
    })

    const currentUserProjects = totalProjectTimes.map((item,index) =>
        <ProjectCard 
            key = {index}
            item = {item} 
            setCurrentProject = {setCurrentProject} 
            timeFormatter = {timeFormatter}
        />
        );
    
    const addProject = (e) => {
        e.preventDefault();

        if (!newProject) {
            alert('please add a task')
            return
        }

        setLogData([...logData, {
            projectName: newProject,
            userName: currentUser,
            startDate: dateFormatter(),
            logDurationSec:0
        }])

        console.log(logData);
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

            <nav>
                <a>Projects</a>
                <a>Logs</a>
                <a>Charts</a>
            </nav>

            <Projects
                addProject = {addProject}
                setNewProject = {setNewProject}
                currentUserProjects = {currentUserProjects}
                />

            <section className ='log-history'> 
                <h3>Logs History</h3>
            </section>
        </div>
        

    )
}

export default Dashboard

