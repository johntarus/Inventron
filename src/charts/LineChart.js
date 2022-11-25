import React, { useState } from 'react'
import SmoothLineChart from './SmoothLineChart'
import SharpLineChart from './SharpLineChart'
import SmallTable from '../components/SmallTable'

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
