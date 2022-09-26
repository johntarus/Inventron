import React from 'react'
import CreditSales from './CreditSales'
import Hero from './Hero'
import SideItems from './SideItems'

const Home = () => {
    return (
        <div className="relative flex flex-col md:flex-row mt-14 text-gray-600">
            <div className="flex flex-col md:ml-4 w-full md:pr-6 md:w-3/4">
                <Hero />
                <CreditSales />
                <SideItems />
            </div>
        </div>
    )
}

export default Home
