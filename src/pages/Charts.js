import React from 'react'
import VerticalBar from '../components/VerticalBar'

const Charts = React.memo(({ /* totalProjectTimes */ }) => {
    return (
        <div>
            charts are coming up 
                <VerticalBar
                    /* totalProjectTimes = {totalProjectTimes} */
                />
        </div>
    )
})

export default Charts
