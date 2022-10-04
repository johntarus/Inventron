import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BigBarChart = () => {
    const data = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [
            {
                label: 'Product Performance',
                data: [20, 40, 37, 20, 35, 45, 33, 45, 43, 45, 43, 48],
                barThickness: 20,
                backgroundColor: [
                    '#E4E4E4',
                    '#E4E4E4',
                    '#E4E4E4',
                    '#E4E4E4',
                    '#E4E4E4',
                    '#2951FE',
                    '#E4E4E4',
                    '#E4E4E4',
                    '#E4E4E4',
                    '#E4E4E4',
                    '#E4E4E4',
                    '#E4E4E4',
                ],
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    }
    return (
        <div>
            <div className="flex justify-between m-1 mb-4">
                <div className="flex items-center font-bold">
                    <h1 className="font-bold">Product Performance</h1>
                </div>
                <button className="bg-lightBlue hover:bg-blue-700 text-white py-0.5 px-6 rounded-full">
                    view all
                </button>
            </div>
            <div className="flex items-center gap-1 md:gap-12 m-1 text-xs font-bold">
                <h1 className="performing text-lightBlue thick">
                    Best Performing Product
                </h1>
                <h1>Average Perfoming Product</h1>
                <h1>Worst Perfoming Product</h1>
            </div>
            <div className="shadow-xl rounded-xl">
                <Bar data={data} options={options} height="200px" />
            </div>
        </div>
    )
}

export default BigBarChart
