import ProjectCard from '../components/ProjectCard'
import './Projects.css'
import { useState } from 'react';

const Projects = ({ logData, setLogData, dateFormatter, currentUser, currentProject, setCurrentProject, totalProjectTimes, timerOn, timerHandler, timeFormatter }) => {
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
            startTime: '',
            endTime: '',
            logDurationSec: 0
        }])
        setNewProject('');
    }
    

    
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
            {currentUserProjects}
            <form onSubmit = {addProject}>
                <input 
                    type="text" 
                    value={newProject} 
                    onChange={(e)=>setNewProject(e.target.value)}/>
                <input type="submit"/>
            </form>
        </section>
    )
}

export default Projects

