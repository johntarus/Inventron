import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { BsFillEyeFill } from 'react-icons/bs'

const SmoothLineChart = () => {
    const [data, setData] = useState([])
    async function getData() {
        const token = process.env.REACT_APP_API_KEY
        try {
            const response = await fetch(
                'https://interview.inventron.co/api/v1/wallet-data',
                {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + token,
                        Accept: '*/*',
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            )
            const result = await response.json()
            setData(result)
            console.log(result)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const valueArray = data?.map((valueType) => valueType.value)

    const dataInfo = {
        labels: data?.map((monthType) => monthType.month),
        datasets: [
            {
                label: 'wallet Balance',
                lineTension: 0.5,
                borderColor: '#2951FE',
                data: data?.map((valueType) => valueType.value),
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
                <h1 className="font-bold">
                    KES {''}
                    {valueArray
                        .reduce(
                            (accumulator, currentValue) =>
                                accumulator + currentValue,
                            0
                        )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h1>
                <div className="flex flex-peopleRows gap-6">
                    <p className="text-xs">Wallet Balance</p>
                    <BsFillEyeFill />
                </div>
            </div>
            <Line data={dataInfo} options={options} />
        </div>
    )
}

export default SmoothLineChart
