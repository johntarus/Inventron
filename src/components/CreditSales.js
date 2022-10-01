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

const CreditSales = () => {
    return (
        <div className="my-4">
            <div className="flex justify-between m-1">
                <div className="flex items-center">
                    <h1 className="font-bold mr-1">Credit sales</h1>
                    <span>
                        <RiArrowDropDownLine />
                    </span>
                </div>
                <button className="bg-lightBlue hover:bg-blue-700 text-white py-0.5 px-6 rounded-full">
                    view all
                </button>
            </div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650, fontSize: '10px' }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: '8px' }}>
                                INVOICE
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                CUSTOMER
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>DATE</TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                AMOUNT
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                STATUS
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                PHONE
                            </TableCell>
                            <TableCell sx={{ fontSize: '10px' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontSize: '10px' }}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.customer}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.date}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.amount}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.status}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.phone}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.dots}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CreditSales
