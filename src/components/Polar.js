import React from 'react';
import { PolarArea } from 'react-chartjs-2';
//Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

const Polar = ({ totalProjectTimes }) => {

    const dLabels = totalProjectTimes.map((log) => log.projectName);
    const dTimes = totalProjectTimes.map((log) => log.totalDurationSec)

    const data = {
        labels: dLabels,
        datasets: [
            {
            label: 'hours',
            data: dTimes,
            backgroundColor: [
                'rgba(48, 128, 215, 1)',
                'rgba(108, 84, 155, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,

            }
        ],
    };
    
    return (
        <>
            <PolarArea data={data}/>
        </>
    );
}

export default Polar;