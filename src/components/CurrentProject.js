import Clock from '../components/Clock'
import './CurrentProject.css'


const CurrentProject = ({ currentProject, currentUser, dataState, dateFormatter}) => {
    return (
        <section className='current-project-container'>
            {
                (currentProject == null) ? 
                    <div className='current-project-card no-project'>
                        <h3>Choose or add a project to start tracking...</h3> 
                    </div>

                :   <div className='current-project-card'>
                        <h3>{currentProject}</h3>
                        <Clock 
                            currentProject = {currentProject}
                            currentUser={currentUser}
                            dataState = {dataState}
                            dateFormatter = {dateFormatter}
                        />
                    </div>
            }
        </section>
    )
}

export default CurrentProject