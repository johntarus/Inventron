import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import api from '../api/data'

const Shops = () => {
    const [data, setData] = useState([])
    const token = JSON.parse(localStorage.getItem('token'))
    async function getData() {
        await api
            .get('/api/v1/shops', {
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

    return (
        <div className="md:ml-4 mt-16">
            <div className="flex justify-between m-1">
                <div className="flex items-center">
                    <h1 className="font-bold mr-1">Shops</h1>
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
                            <TableCell sx={{ fontSize: '8px' }}>SHOP</TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                CONSTITUENCY
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>
                                COUNTY
                            </TableCell>
                            <TableCell sx={{ fontSize: '8px' }}>WARD</TableCell>
                            <TableCell sx={{ fontSize: '10px' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.ownerId}>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.shopName}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.constituency}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.county}
                                </TableCell>
                                <TableCell sx={{ fontSize: '10px' }}>
                                    {row.ward}
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

export default Shops
