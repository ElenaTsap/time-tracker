import { useState, useEffect } from 'react';

const Clock = ({ currentProject, currentUser, dataState, dateFormatter }) => {
    const [timerOn, setTimerOn] = useState(false);
    const [totalSeconds, setTotalSeconds] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [displayTime, setDisplayTime] = useState('0:00:00');
    
    const timerHandler = () => {
       /*  setTimerOn(prevTimerOn => !prevTimerOn) */
        if (timerOn === false) {
            setTimerOn(true)
        } else {
            setTimerOn(false)
            dataState.setLogData([...dataState.logData, {
                projectName: currentProject,
                userName: currentUser,
                startDate: dateFormatter,
                logDurationSec:totalSeconds
            }]);
            console.log(dataState.logData);
        }
    }

    useEffect(() => {
        if (timerOn === true) {
            setTimeout(function() {setTotalSeconds((totalSeconds + 1));}, 1000)
            console.log(totalSeconds);
            setSeconds((totalSeconds + 1)%60);
            setMinutes(Math.floor(totalSeconds/60)%60);
            setHours(Math.floor(totalSeconds/3600));

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
            <button className='stop-button' onClick={timerHandler}>⏸️</button>
            :<button className='start-button' onClick={timerHandler}>▶</button>
            }
        </div>
    )
}

export default Clock
