import {useState, useEffect} from 'react';

export default function () {
    const [time, setTime] = useState(0);
    const [initialTime, setInitialTime] = useState(Date.now());
    const [timerOn, setTimerOn] = useState(false);

    /* replace it with toggle from screenshot */
    function timerHandler() {
        if (timerOn == false) {
            setTimerOn(true)
        } else {
            setTimerOn(false)
        }
    }
    
    let timer = () => {
        if (timerOn == true) {
            setTime(Math.floor((Date.now()-initialTime)/1000));
        }
    }

    useEffect(() => {
        if (timerOn == true)  {
            setTimeout(timer, 1000);
        }
    }, [time, timerOn])    

    return (
            <div>
                <h3>{time}</h3>

                {
                timerOn ?        
                <button className='stop-button' onClick={timerHandler}>⏸️</button>
                :<button className='start-button' onClick={timerHandler}>▶</button>
                }
            </div>
    );
}

