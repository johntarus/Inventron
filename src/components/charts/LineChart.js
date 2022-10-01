import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BsFillEyeFill } from 'react-icons/bs'
import { peopleRows } from '../../assets/data'

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
            {
                label: 'wallet Balance',
                data: [18, 22, 18, 16, 25, 15, 17],
            },
        ],
    }

    const options = {
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
        <div className="flex flex-col md:flex-row gap-3 pt-6">
            <div className="shadow-xl rounded-xl w-full md:w-1/2">
                <div className="pl-4">
                    <h1 className="font-bold">KES 9,564</h1>
                    <div className="flex flex-peopleRows gap-6">
                        <p className="text-xs">Wallet Balance</p>
                        <BsFillEyeFill />
                    </div>
                </div>
                <Line data={data} options={options} />
            </div>
            {/* Table */}
            <div className="shadow-xl rounded-xl w-full md:w-1/2 pt-4">
                <div className="flex justify-between m-1">
                    <div className="flex items-center gap-8">
                        <h1 className="font-bold">People</h1>
                        <span>
                            <RiArrowDropDownLine />
                        </span>
                    </div>
                    <button className="bg-lightBlue hover:bg-blue-700 text-white py-0.5 px-6 rounded-full">
                        Filter
                    </button>
                </div>
                <div className="">
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 200, fontSize: '3px' }}
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '10px' }}>
                                        Name
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '10px' }}>
                                        Category
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '10px' }}>
                                        Phone Number
                                    </TableCell>
                                    <TableCell
                                        sx={{ fontSize: '10px' }}
                                    ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {peopleRows.map((peopleRows, index) => (
                                    <TableRow key={index}>
                                        <TableCell
                                            sx={{ fontSize: '10px' }}
                                            component="th"
                                            scope="peopleRows"
                                        >
                                            {peopleRows.name}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: '10px' }}>
                                            {peopleRows.customer}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: '10px' }}>
                                            {peopleRows.phone}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: '10px' }}>
                                            {peopleRows.dots}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default LineChart
