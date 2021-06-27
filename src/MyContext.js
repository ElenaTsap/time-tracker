import React from 'react'
import {useState} from 'react'

export const ContextCreator = React.createContext();

export const StateHolder = function (props) {
    const [logData, setLogData] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);
    const [startTime, setStartTime] = useState(null)
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [checked, setChecked] = useState(false);

    return (
        <ContextCreator.Provider value = {{logData, setLogData, totalSeconds, setTotalSeconds, timerOn, setTimerOn, currentProject, setCurrentProject, startTime, setStartTime, checked, setChecked}}>
            {props.children}
        </ContextCreator.Provider>
    )
}