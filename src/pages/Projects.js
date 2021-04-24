import ProjectCard from '../components/ProjectCard'
import './Projects.css'
import { useState } from 'react';
import { dateFormatter } from '../components/Tools'
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'

const Projects = ({ currentUser, currentProject, setCurrentProject, totalProjectTimes }) => {
    const context = useContext(ContextCreator);
    const [newProject, setNewProject] = useState('')

    const addProject = (e) => {
        e.preventDefault();
    
        if (!newProject) {
            alert('please add a project name')
            return
        }
    
        context.setLogData([...context.logData, {
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

