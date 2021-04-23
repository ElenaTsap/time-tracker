import React from 'react'
import {useState} from 'react'

export const ContextCreator = React.createContext();

export const StateHolder = function (props) {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    return (
        <ContextCreator.Provider value = {{totalSeconds, setTotalSeconds, timerOn, setTimerOn}}>
            {props.children}
        </ContextCreator.Provider>
    )
}