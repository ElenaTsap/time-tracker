import './Dashboard.css'
import { useState } from 'react';

export default function (props) {
    const [timerOn, setTimerOn] = useState(false);
    const [currentProject, setCurrentProject] = useState('');
    const [currentProjectTracker, setCurrentProjectTracker] = useState(null);
    const [allProjects, setAllProjects] = useState(props.logData)
    let durationMS;
    let isNewProject;
    
    function logHandler() {
        let date = new Date();
        let time = date.getTime();

        if (timerOn == false) {
            setTimerOn(true)
            props.logData[1].startDate = date;
            props.logData[1].startTime = time;
        } else {
            setTimerOn(false)
            props.logData[1].endDate = date;
            props.logData[1].endTime = time;

            durationMS = props.logData[1].endTime - props.logData[1].startTime;
            console.log(typeof durationMS);
            props.logData[1].duration = msToMinutesAndSeconds(durationMS)
            console.log(durationMS);
            console.log(props.logData[1].duration);
            console.log(msToMinutesAndSeconds);
        }
        console.log(date, time);
        console.log(props.logData);
    }

    function msToMinutesAndSeconds(duration) {
        let minutes = Math.floor(duration / 60000);
        let seconds = ((duration % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    function addProject () {
        props.logData.push({
            projectName:currentProject,
            userName: props.currentUser,
            startDate: '',
            endDate: '',
            startTime: '',
            endTime:''
        })
        console.log(props.logData);

        setCurrentProjectTracker (   
        <div>
            <div>
                {currentProject}
            </div>
            <div>
            {
                timerOn ?        
                <button className='stop-button' onClick={logHandler}>⏸️</button>
                :<button className='start-button' onClick={logHandler}>▶</button>
            }
            </div>
        </div>)
    }

/*     let currentUserProjects = props.logData.filter(log => log.userName === props.currentUser).map(item => <option>{item.projectName}</option>); */

    let currentUserProjects = props.logData
        .filter(log => log.userName === props.currentUser)
        .map(item =><button>
                        <div className='project-name'>{item.projectName}</div>
                        <div className='project-time'>{item.displayDuration}</div>
                    </button>);

    let logHistoryHandler = props.logData.filter(log => log.userName === props.currentUser).map (
        log =>  <div className ='project-container'>
                    <div>{log.projectName}</div>
                    <div>{log.startDate}</div>
                    <div>{log.displayDuration}</div>
                </div>
    )

    return (
        <div className = 'dashboard-container'>
            <section>
                <h3>Welcome {props.currentUser}</h3>
                <button>logout</button>
            </section>

            <section className='current-project-container'>
                <h3>Choose or add a project to start tracking...</h3>
                {currentProjectTracker}
            </section>

            <section className = 'select-container' onClick={(e)=>setCurrentProject(e.target.value)}>
                <div className ='project-container'>
                    <input onChange={(e)=>setCurrentProject(e.target.value)}/>
                    <button className='add-button' onClick = {addProject}>Add</button>
                </div>

{/*                 <select onChange={(e)=>setCurrentProject(e.target.value)}>
                    {currentUserProjects}
                </select> */}
                {currentUserProjects}
            </section>

            <section className ='log-history'> 
                <h3>Logs History</h3>
                {logHistoryHandler}
            </section>
        </div>
        

    )
}
