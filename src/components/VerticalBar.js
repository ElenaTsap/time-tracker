import React from 'react'
import { Bar } from 'react-chartjs-2'

    
    const VerticalBar = ({/* totalProjectTimes */}) => {
            const options = {
        scales: {
        yAxes: [
            {
            ticks: {
                beginAtZero: false,
            },
            },
        ],
        },
    }
        const data = {
            labels: [10,10],
            datasets: [
                {
                    label: '# of hours',
                    data: [10, 30],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
                ],
            }
        
        return (
        <>
        <div className='header'>
            <div className='links'>
            </div>
        </div>
        <Bar data={data} options={options} />
        </>
    )}
    
    export default VerticalBar