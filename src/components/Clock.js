import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'
import { timeFormatter } from '../components/Tools'
import { getTimeStamp, dateFormatter, getTime } from '../components/Tools'

const Clock = ({ currentUser }) => {
    const context = useContext(ContextCreator);
    const [seconds, setSeconds] = useState(0);
    const [displayTime, setDisplayTime] = useState('0:00:00');

    const timerHandler = () => {
    /*  setTimerOn(prevTimerOn => !prevTimerOn) */
        if (context.timerOn === false) {
            context.setTimerOn(true)
            context.setStartTime(getTime());
        } else {
            context.setStartTime(getTime());
            context.setTimerOn(false);
            context.setLogData([...context.logData, {
                id: getTimeStamp(),
                projectName: context.currentProject,
                userName: currentUser,
                startDate: dateFormatter(),
                startTime: context.startTime,
                endTime: getTime(),
                logDurationSec:seconds
            }]);
            context.setTotalSeconds(seconds);
            context.setStartTime(null)
        }
    }
    
    useEffect(() => {
        if (context.timerOn === true) {
        setTimeout(function() { setSeconds((seconds + 1)%60); }, 1000)
            setDisplayTime (timeFormatter(seconds));
        } else {
            setDisplayTime('0:00:00');
/*             context.setTotalSeconds(seconds); */
            setSeconds(0);
        }
    }, [seconds, context.timerOn]) 

    return (
        <div className='time-container'>
            <h3>{displayTime}</h3>
            {
            context.timerOn ?        
            <button className='stop-button' onClick={timerHandler}><FaPause/></button>
            :<button className='start-button' onClick={timerHandler}><FaPlay/></button>
            }
        </div>
    )
}

export default Clock
