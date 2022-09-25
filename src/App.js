import React from 'react'
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
import { useStateContext } from './contexts/ContextProvider'

const App = () => {
    const { activeMenu } = useStateContext()
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative">
                    {activeMenu ? (
                        <div className="fixed bg-lightBlue md:w-44 min-h-screen rounded-r-[16px] text-white z-10">
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
                        <div className="fixed md:static dark:bg-main-dark-bg navbar w-full shadow-md h-14 items-center">
                            <Navbar />
                        </div>

                        <div className="md:ml-44">
                            <Routes>
                                <Route path="/home" element={<Home />} />
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
                                    path="/chart-support"
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
