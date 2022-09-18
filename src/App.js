import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Header, Sidebar } from './components'
import {
    Home,
    Inventory,
    People,
    Shops,
    Transactions,
    ChartSupport,
} from './pages'

const App = () => {
    const activeMenu = true
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative">
                    {activeMenu ? (
                        <div className="fixed bg-lightBlue w-60 min-h-screen rounded-r-lg text-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0">
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`bg-mainBg min-h-screen w-full ${
                            activeMenu ? 'md:ml-0' : 'flex-2'
                        }`}
                    >
                        <div className="fixed md:static bg-main-Bg navbar w-full shadow-md h-20">
                            <Navbar />
                        </div>
                    </div>
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<Home />} />
                            <Route path="/inventory" element={<Inventory />} />
                            <Route
                                path="/transactions"
                                element={<Transactions />}
                            />
                            <Route path="/people" element={<People />} />
                            <Route path="/shops" element={<Shops />} />
                            <Route
                                path="/chart-support"
                                element={<ChartSupport />}
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
