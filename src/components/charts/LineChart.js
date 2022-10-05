import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { peopleRows } from '../../assets/data'
import SmoothLineChart from './SmoothLineChart'
import SharpLineChart from './SharpLineChart'
import SmallTable from '../SmallTable'

const LineChart = () => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <div className="flex flex-col md:flex-row gap-3 pt-6">
            <div className="shadow-xl rounded-xl w-full md:w-1/2">
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {isHovering && <SharpLineChart />}
                    {!isHovering && <SmoothLineChart />}
                </div>
            </div>
            <SmallTable />
        </div>
    )
}

export default LineChart
