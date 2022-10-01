import * as React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
// import { RiArrowDropDownLine } from 'react-icons/ri'
// import { rows } from '../assets/data'
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
