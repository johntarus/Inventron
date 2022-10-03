import * as React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import '../App.css'
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'

const CreditSales = () => {
    return (
        <div className="my-4">
            <BarChart />
            <LineChart />
        </div>
    )
}

export default CreditSales
