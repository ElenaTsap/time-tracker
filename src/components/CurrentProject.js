import Clock from '../components/Clock'
import './CurrentProject.css'


const CurrentProject = ({ currentProject, timerOn, timerHandler, totalSeconds, setTotalSeconds}) => {
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
                            timerOn = {timerOn}
                            timerHandler ={timerHandler}
                            totalSeconds = {totalSeconds}
                            setTotalSeconds = {setTotalSeconds}
                        />
                    </div>
            }
        </section>
    )
}

export default CurrentProject