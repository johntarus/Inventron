import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { BsFillEyeFill } from 'react-icons/bs'

const SmoothLineChart = () => {
    const data = {
        labels: ['Jan', [], 'Feb', [], 'Mar', [], 'Apr', [], 'May', [], 'June'],
        datasets: [
            {
                label: 'wallet Balance',
                lineTension: 0.5,
                borderColor: '#2951FE',
                data: [19, 21, 20, 19, 19, 22, 17, 18, 16, 25, 23],
            },
        ],
    }

    const options = {
        elements: { point: { radius: 0 } },
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
    }
    return (
        <div>
            <div className="pl-4">
                <h1 className="font-bold">KES 9,564</h1>
                <div className="flex flex-peopleRows gap-6">
                    <p className="text-xs">Wallet Balance</p>
                    <BsFillEyeFill />
                </div>
            </div>
            <Line data={data} options={options} />
        </div>
    )
}

export default SmoothLineChart
