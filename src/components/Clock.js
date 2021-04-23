import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import {ContextCreator} from '../MyContext'
import {useContext} from 'react'
import { timeFormatter } from '../components/Tools'

const Clock = ({ timerHandler }) => {
    const context = useContext(ContextCreator);
    const [seconds, setSeconds] = useState(0);
    const [displayTime, setDisplayTime] = useState('0:00:00');

    useEffect(() => {
        if (context.timerOn === true) {
            setTimeout(function() {context.setTotalSeconds((context.totalSeconds + 1));}, 1000)
            setSeconds((context.totalSeconds + 1)%60);
            setDisplayTime (timeFormatter(seconds))
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
