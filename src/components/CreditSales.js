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
                    sx={{ minWidth: 650, fontSize: '5px' }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>INVOICE</TableCell>
                            <TableCell>CUSTOMER</TableCell>
                            <TableCell>DATE</TableCell>
                            <TableCell>AMOUNT</TableCell>
                            <TableCell>STATUS</TableCell>
                            <TableCell>PHONE</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.customer}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.dots}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CreditSales

{
    /* <div className="flex justify-between m-1">
<h1 className="font-bold">Credit sales</h1>
<button className="bg-lightBlue hover:bg-blue-700 text-white py-0.5 px-6 rounded-full">
    view all
</button>
</div> */
}
