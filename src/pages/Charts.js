import React from 'react'
import './Charts.css'
import VerticalBar from '../components/VerticalBar'
import Polar from '../components/Polar'

const Charts = React.memo(({ totalProjectTimes }) => {
    return (
        <div className="charts-container">
                {/* <VerticalBar
                    totalProjectTimes = {totalProjectTimes}
                /> */}
                <Polar
                    totalProjectTimes = {totalProjectTimes}
                    className = "polar-chart"
                />
        </div>
    )
})

export default Charts
