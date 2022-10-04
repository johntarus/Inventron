import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar } from './components'
import {
    Home,
    Inventory,
    People,
    Shops,
    Transactions,
    ChartSupport,
} from './pages'
import { useStateContext } from './contexts/ContextProvider'

const App = () => {
    const { activeMenu } = useStateContext()
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative">
                    {activeMenu ? (
                        <div className="fixed bg-lightBlue md:w-44 min-h-screen rounded-r-[16px] text-white z-20">
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
                        <div className="fixed w-full bg-mainBg shadow-md h-12 items-center z-10">
                            <Navbar />
                        </div>

                        <div className="md:ml-44 z-2">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/inventory"
                                    element={<Inventory />}
                                />
                                <Route
                                    path="/transactions"
                                    element={<Transactions />}
                                />
                                <Route path="/people" element={<People />} />
                                <Route path="/shops" element={<Shops />} />
                                <Route
                                    path="/chat-support"
                                    element={<ChartSupport />}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
