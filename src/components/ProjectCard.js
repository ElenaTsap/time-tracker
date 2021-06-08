import './ProjectCard.css'
import { timeFormatter } from '../components/Tools'
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'

const ProjectCard = ({ item, currentProject, setCurrentProject, timerHandler }) => {
    const context = useContext(ContextCreator);

    const activeProjectChecker = (project) => {
        if (context.timerOn === true) {
            if (window.confirm(`Stop tracking ${context.currentProject}?`)) {
                context.setTimerOn(false);
                context.setCurrentProject(project)
            }
        } else {
            context.setCurrentProject(project)
        }
    }

    return (
        <div onClick={(e)=> activeProjectChecker(item.projectName)} className= {`project-card ${(item.projectName === context.currentProject) && 'selected'}`}>
            <div className='project-name'>{item.projectName}</div>
            <div className='project-date'>started: {item.startDate}</div>
            <div className='project-date'>last tracked: {item.lastTrackedDate}</div>
            <div className='project-time'>{timeFormatter(item.totalDurationSec)}</div>

        </div>
    )
}

export default ProjectCard

/*     const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    } */