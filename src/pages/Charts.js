import React from 'react'
import VerticalBar from '../components/VerticalBar'

const Charts = ({ totalProjectTimes }) => {
    return (
        <div>
                <VerticalBar
                    totalProjectTimes = {totalProjectTimes}
                />
        </div>
    )
}

export default Charts
