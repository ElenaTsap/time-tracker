import Clock from '../components/Clock'
import './CurrentProject.css'
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'

const CurrentProject = ({ currentUser }) => {
    const context = useContext(ContextCreator);

    console.log('current project re-renders');
    console.log('from current project components', context.currentProject);
    return (
        <section className='current-project-container'>
            {
                (context.currentProject == null) ? 
                    <div className='current-project-card no-project'>
                        <h3>Choose or add a project to start tracking...</h3> 
                    </div>

                :   <div className='current-project-card'>
                        <h3>{context.currentProject}</h3>
                        <Clock 
                            currentUser={currentUser} 
                                /* timerHandler ={timerHandler} */
                            />
                    </div>
            }
        </section>
    )
}

export default CurrentProject