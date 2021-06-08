import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Clock = ({ timerOn, timerHandler, totalSeconds, setTotalSeconds }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [displayTime, setDisplayTime] = useState('0:00:00');
    
    let timeFormat = () => {
        if (minutes <= 9) {
            if (seconds <= 9) {
                return (`${hours}:0${minutes}:0${seconds}`)
            } else {
                return (`${hours}:0${minutes}:${seconds}`)
            }
        } else {
            if (seconds <= 9) {
                return (`${hours}:${minutes}:0${seconds}`)
            } else {
                return (`${hours}:${minutes}:${seconds}`)
            }
        }
    }

    useEffect(() => {
        if (timerOn === true) {
            setTimeout(function() {setTotalSeconds((totalSeconds + 1));}, 1000)
            setSeconds((totalSeconds + 1)%60);
            setMinutes(Math.floor(totalSeconds/60)%60);
            setHours(Math.floor(totalSeconds/3600));

            setDisplayTime (timeFormat)
        } else {
            setDisplayTime('0:00:00');
            setTotalSeconds(0);
            setSeconds(0);
            setMinutes(0);
            setHours(0);
        }
    }, [totalSeconds, timerOn]) 

    return (
        <div className='time-container'>
            <h3>{displayTime}</h3>

            {
            timerOn ?        
            <button className='stop-button' onClick={timerHandler}><FaPause/></button>
            :<button className='start-button' onClick={timerHandler}><FaPlay/></button>
            }
        </div>
    )
}

export default Clock
////////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'
import { timeFormatter } from '../components/Tools'

const Clock = ({ timerHandler }) => {
    const context = useContext(ContextCreator);
    const [seconds, setSeconds] = useState(0);
    const [displayTime, setDisplayTime] = useState('0:00:00');

/*     useEffect(() => {
        if (context.timerOn === false) {
            context.setTotalSeconds((seconds))
            setSeconds(0);
        }
    }, [context.timerOn])  */

    useEffect(() => {
        if (context.timerOn === true) {
        setTimeout(function() {
                setSeconds((seconds + 1)%60);
                context.setTotalSeconds((context.totalSeconds + 1)%60);
            }, 1000)
            setDisplayTime (timeFormatter(seconds))
/*             setTimeout(function() {context.setTotalSeconds((context.totalSeconds + seconds));}, 1000)
            setSeconds((context.totalSeconds + 1)%60);
            setDisplayTime (timeFormatter(seconds))  */
        } else {
            
            setDisplayTime('0:00:00');
            context.setTotalSeconds(0);
            setSeconds(0);
        }
    }, [context.totalSeconds, context.timerOn]) 

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
