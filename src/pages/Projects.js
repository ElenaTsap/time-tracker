import ProjectCard from '../components/ProjectCard'
import { useState, useEffect } from 'react';

const Projects = ({ logData, setLogData, dateFormatter, currentUser, setCurrentProject }) => {
    const [newProject, setNewProject] = useState('')

/*     useEffect(() => {
        if (logData === undefined) {
            setLogData([]);
        }
        }, []) */

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

    const addProject = (e) => {
        e.preventDefault();
    
        if (!newProject) {
            alert('please add a project name')
            return
        }
    
        setLogData([...logData, {
            projectName: newProject,
            userName: currentUser,
            startDate: dateFormatter,
            logDurationSec:0
        }])
    
        setNewProject('');
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

    return (
        <section className = 'projects-container'>
            <form onSubmit = {addProject}>
                <input 
                    type="text" 
                    value={newProject} 
                    onChange={(e)=>setNewProject(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            {currentUserProjects}
        </section>
    )
}

export default Projects

