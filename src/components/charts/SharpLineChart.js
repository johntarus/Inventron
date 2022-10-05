import React from 'react'
import { Line } from 'react-chartjs-2'
import { BsFillEyeFill } from 'react-icons/bs'
import mastercard from '../../assets/mastercard.svg'

const SharpLineChart = () => {
    const data = {
        labels: [
            '8/19',
            '9/19',
            '10/19',
            '11/19',
            '12/19',
            '1/20',
            '2/20',
            '3/20',
            '4/20',
            '5/20',
        ],
        datasets: [
            {
                label: 'wallet Balance',
                lineTension: 0,
                borderColor: '#2951FE',
                data: [5, 10, 4, 7, 11, 7, 8, 2, 3, 11],
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
                ticks: {
                    display: false,
                },
            },
        },
    }
    return (
        <div className="w-full md:w-80">
            <div className="pl-4">
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">$ 9.564</h1>
                    <img className="h-6 w-8" src={mastercard} />
                </div>
                <div className="flex flex-peopleRows gap-6">
                    <p className="text-xs">Card Balance</p>
                    <BsFillEyeFill />
                </div>
            </div>
            <Line data={data} options={options} />
        </div>
    )
}

export default SharpLineChart
