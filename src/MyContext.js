import React from 'react'
import {useState} from 'react'

export const ContextCreator = React.createContext();

export const StateHolder = function (props) {
    const [totalSeconds, setTotalSeconds] = useState(0);

    return (
        <ContextCreator.Provider value = {{totalSeconds, setTotalSeconds}}>
            {props.children}
        </ContextCreator.Provider>
    )
}