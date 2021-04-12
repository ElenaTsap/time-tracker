import ProjectCard from '../components/ProjectCard'
import { useState } from 'react';

const Projects = ({ logData, setLogData, dateFormatter, currentUser, currentProject, setCurrentProject, timerOn, timerHandler, timeFormatter }) => {
    const [newProject, setNewProject] = useState('')

    const addProject = (e) => {
        e.preventDefault();
    
        if (!newProject) {
            alert('please add a project name')
            return
        }
    
        setLogData([...logData, {
            projectName: newProject,
            userName: currentUser,
            startDate: dateFormatter(),
            logDurationSec: 0
        }])
    
        setNewProject('');
    }
    
    const totalProjectTimes = [];
    
    logData.forEach(project => {
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
            currentProject = {currentProject}
            setCurrentProject = {setCurrentProject} 
            timeFormatter = {timeFormatter}
            timerOn = {timerOn}
            timerHandler = {timerHandler}
        />
    );


    return (
        <section className = 'projects-container'>
            <form onSubmit = {addProject}>
                <input 
                    type="text" 
                    value={newProject} 
                    onChange={(e)=>setNewProject(e.target.value)}/>
                <input type="submit"/>
            </form>
            {currentUserProjects}
        </section>
    )
}

export default Projects

