const ProjectCard = ({ item, setCurrentProject, timeFormatter }) => {
    return (
        <button onClick={(e)=>setCurrentProject(item.projectName)}>
            <div className='project-name'>{item.projectName}</div>
            <div className='project-name'>started: {item.startDate}</div>
            <div className='project-time'>total time: {timeFormatter(item.totalDurationSec)}</div>
        </button>
    )
}

export default ProjectCard
