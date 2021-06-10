import './ProjectCard.css'
import { timeFormatter } from '../components/Tools'
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'
import { GrClose } from 'react-icons/gr';

const ProjectCard = ({ item }) => {
    const context = useContext(ContextCreator);

    const activeProjectChecker = (project) => {
        if (context.timerOn === true) {
            alert(`${context.currentProject} is running! Stop tracking to change project.`)
        } else {
            context.setCurrentProject(project)
        }
    }

    const deleteProjectHandler = (project) => {
        if(window.confirm(`Are you sure you want to delete ${project}? All logs will be deleted permanently`)) {
            let answerName = prompt(`Please write the project's name (${project}-delete) to delete it`);
            if (answerName === project+'-delete') {
                console.log('deleting!');
                let logsArray = [...context.logData];
                let filteredArray = logsArray.filter((log) => log.projectName !== project);
                context.setCurrentProject(null);
                context.setLogData(filteredArray);
                console.log('before', context.currentProject);
                alert(`Farewell and goodbye ${project}`)
                console.log('after',context.currentProject);
            } else {
                console.log('not deleting');
            }
        }
        // giati epistrefei sto palio value
        console.log(context.currentProject);
    }

    return (
        <div onClick={(e)=> activeProjectChecker(item.projectName)} className= {`project-card ${(item.projectName === context.currentProject) && 'selected'}`}>
            <div className='card-header-container'>
            <div className='project-name'>{item.projectName}</div>
            <div onClick={()=>deleteProjectHandler(item.projectName)}><GrClose/></div>
            </div>
            <div className='project-date'>created: {item.startDate}</div>
            <div className='project-date'>latest: {item.totalDurationSec > 0 ? item.lastTrackedDate : '-'}</div>
            <div className='project-time'>total: {timeFormatter(item.totalDurationSec)}</div>

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

    /* logsArray.map((log, index) => {
                    console.log(index, 'log.projectName',log.projectName);
                    if (log.projectName === project) {
                        console.log(index, project);
                        logsArray.splice(index, 1);
                    }
                }); */