import './ProjectCard.css'

const ProjectCard = ({ item, currentProject, setCurrentProject, timeFormatter, timerOn, timerHandler }) => {
/*     const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    } */

    const activeProjectChecker = (project) => {
        if (timerOn === true) {
            if (window.confirm(`Stop tracking ${currentProject}?`)) {
                timerHandler();
                setCurrentProject(project)
            }
        } else {
            setCurrentProject(project)
        }
    }

    return (
        <div onClick={(e)=> activeProjectChecker(item.projectName)} className= {`project-card ${(item.projectName === currentProject) && 'selected'}`}>
            <div className='project-name'>{item.projectName}</div>
            <div className='project-date'>started: {item.startDate}</div>
            <div className='project-date'>last tracked: {item.lastTrackedDate}</div>
            <div className='project-time'>{timeFormatter(item.totalDurationSec)}</div>
        </div>
    )
}

export default ProjectCard
