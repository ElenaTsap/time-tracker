import { useState, useEffect } from 'react';

export default function () {
    let date = new Date();
    console.log(date.toLocaleTimeString());

    const [displayTime, setDisplayTime] = useState('0:00:00');
    const [timerOn, setTimerOn] = useState(false);
    const [currentTime, setCurrentTime] = useState(date.getTime())
    let secondsCounter = 0;

    useEffect(() => {
        setTimeout(timer, 1000);
    }, [currentTime]);

    let timer = () => {
        secondsCounter++
        setDisplayTime(msToMinutesAndSeconds(secondsCounter))
    }

    function timerHandler() {
        if (timerOn == false) {
            setTimerOn(true)
        } else {
            setTimerOn(false)
        }
    }

    function msToMinutesAndSeconds(duration) {
        let minutes = Math.floor(duration / 60);
        let seconds = ((duration % 60)).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    
/*     let intervalId = window.setInterval(function(){
        secondsCounter ++; */
/*         let minutes = Math.floor(secondsCounter / 60);
        let seconds = (secondsCounter % 60).toFixed(0);
        let displayTimeRender = minutes + ':' + seconds; */
/*         setDisplayTime(secondsCounter);
        console.log(secondsCounter);

    }, 55800000000); */

    return (
        <div>
            {displayTime} <br/>
            {currentTime}

            {
                timerOn ?        
                <button className='stop-button' onClick={timerHandler}>⏸️</button>
                :<button className='start-button' onClick={timerHandler}>▶</button>
            }
        </div>
    )
}