import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { rows } from '../assets/data'
import '../App.css'

const CreditSales = () => {
    return (
        <div className="my-4">
            <div className="flex justify-between m-1">
                <div className="flex items-center gap-1 md:gap-12 text-xs font-bold">
                    <h1 className="performing text-lightBlue thick">
                        Best Performing Product
                    </h1>
                    <h1>Average Perfoming Product</h1>
                    <h1>Worst Perfoming Product</h1>
                </div>
                <button className="bg-lightBlue hover:bg-blue-700 text-white py-0.5 px-6 rounded-full">
                    view all
                </button>
            </div>
        </div>
    )
}

export default CreditSales
