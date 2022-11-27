import React, { useState, useEffect, useContext } from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import api from '../api/data'

const BigBarChart = () => {
    const [data, setData] = useState([])
    async function getData() {
        const token = JSON.parse(localStorage.getItem('token'))
        await api
            .get('/api/v1/sales-data', {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: '*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                // console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    const dataInfo = {
        labels: data?.map((monthType) => monthType.month),
        datasets: [
            {
                label: 'KES',
                data: data?.map((valueType) => valueType.value),
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
                <Bar data={dataInfo} options={options} height="200px" />
            </div>
        </div>
    )
}

export default BigBarChart
