import Clock from '../components/Clock'
import './CurrentProject.css'
import { StateHolder } from '../MyContext'


const CurrentProject = ({ currentProject, timerOn, timerHandler, totalSeconds, setTotalSeconds }) => {
        
    return (
        <section className='current-project-container'>
            {
                (currentProject == null) ? 
                    <div className='current-project-card no-project'>
                        <h3>Choose or add a project to start tracking...</h3> 
                    </div>

                :   <div className='current-project-card'>
                        <h3>{currentProject}</h3>
                        <StateHolder>
                            <Clock 
                                timerOn = {timerOn}
                                timerHandler ={timerHandler}
                            />
                        </StateHolder>
                    </div>
            }
        </section>
    )
}

export default CurrentProject