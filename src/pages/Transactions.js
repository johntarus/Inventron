import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Transactions = () => {
    const [data, setData] = useState([])
    async function getData() {
        const token = process.env.REACT_APP_API_KEY
        try {
            const response = await fetch(
                'https://interview.inventron.co/api/v1/transactions',
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
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="md:ml-4 mt-16">
            <div className="flex justify-between m-1">
                <div className="flex items-center">
                    <h1 className="font-bold mr-1">Transactions</h1>
                </div>
                <button className="bg-lightBlue md:mr-16 hover:bg-blue-700 text-white py-0.5 px-6 rounded-full">
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
                                CUSTOMER
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>SHOP</TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                AMOUNT
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                PHONE
                            </TableCell>
                            <TableCell sx={{ fontSize: '10px' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.shopId}>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.customer}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.shopName}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    KES {row.amount.toLocaleString()}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.phone}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    <MoreVertIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Transactions
