import React from 'react'
import hero from '../assets/hero.svg'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import customers from '../assets/customers.svg'
import copy from '../assets/copy.svg'
import wallet from '../assets/wallet.svg'
import '../index.css'
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row mt-12 md:mt-0 text-gray-600">
            <div className="flex flex-col md:ml-4 w-full md:w-3/4">
                <div className="my-4 font-bold text-xl ml-4 md:ml-0">
                    Dashboard
                </div>
                <div className="flex flex-col-reverse md:flex-row md:mt-0 justify-between px-4 md:px-8 rounded-xl shadow-xl">
                    <div>
                        <h1 className="font-bold">Welcome back Tafari!</h1>
                        <p className="text-sm">
                            Since your last login in the system, there were:
                        </p>
                        <ul className="list-disc marker:text-[#FD9C29] text-sm ml-4 mb-6">
                            <li>21 new sales</li>
                            <li>15 new restocked items</li>
                            <li>45 new pending credit sales reminders</li>
                        </ul>
                    </div>
                    <img src={hero} className="md:h-42 md:w-36 mb-6 md:mb-0" />
                </div>
                {/* Credit section */}
                <div className="mx-4 my-6">
                    <div className="flex justify-between m-4">
                        <h1 className="font-bold">Credit sales</h1>
                        <button className="bg-lightBlue hover:bg-blue-700 text-white py-0.5 px-6 rounded-full">
                            view all
                        </button>
                    </div>
                </div>
            </div>
            {/* Side Items */}
            <div className="w-full md:w-1/4 px-2">
                <div className="relative bg-[#FF007C] w-full h-[110px] rounded-xl mb-2">
                    <div className="absolute left-4 bottom-2 text-white">
                        <p className="font-bold text-sm">+KES 90,000</p>
                        <p className="text-[8px] ml-2">Revenue This Month</p>
                    </div>
                </div>
                <div className="flex flex-row text-white">
                    <div className="relative bg-[#2D62ED] w-full h-[100px] rounded-xl mb-2 mr-1">
                        <img
                            src={copy}
                            className="absolute top-2 left-4 w-4 h-8"
                        />
                        <div className="absolute left-4 bottom-2">
                            <p className="font-bold">12</p>
                            <p className="text-[8px]">Pending</p>
                            <p className="text-[8px]">Credit Sales</p>
                        </div>
                    </div>
                    <div className="relative bg-[#FD9C29] w-full h-[100px] rounded-xl mb-2 mr-1">
                        <img
                            src={customers}
                            className="absolute top-2 left-4 w-4 h-8"
                        />
                        <div className="absolute left-4 bottom-2">
                            <p className="font-bold">400</p>
                            <p className="text-[8px]">My</p>
                            <p className="text-[8px]">Customers</p>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row text-white">
                    <div className="relative bg-[#FE2929] w-full h-[100px] rounded-xl mb-2 mr-1">
                        <img
                            src={customers}
                            className="absolute top-2 left-4 w-4 h-8"
                        />
                        <div className="absolute left-4 bottom-2">
                            <p className="font-bold">32</p>
                            <p className="text-[8px]">Items</p>
                            <p className="text-[8px]">Out of Stock</p>
                        </div>
                    </div>

                    <div className="relative bg-[#9329FE] w-full h-[100px] rounded-xl mb-2 mr-1">
                        <img
                            src={wallet}
                            className="absolute top-2 left-4 w-4 h-8"
                        />
                        <div className="absolute left-4 bottom-2">
                            <p className="font-bold">KES*****</p>
                            <p className="text-[8px]">Wallet</p>
                            <p className="text-[8px]">Balance</p>
                        </div>
                    </div>
                </div>
                <div className="relative shadow-2xl rounded-xl">
                    <div className="flex justify-between p-2 mb-1">
                        <p className="font-bold">Quick Inventory</p>
                        <BiDotsVerticalRounded className="cursor-pointer" />
                    </div>
                    <div className="flex justify-center items-center">
                        <CircularProgressbarWithChildren
                            value={70}
                            background={true}
                            className="h-36 w-28"
                            styles={buildStyles({
                                pathColor: '#00CCF2',
                                textColor: 'red',
                                trailColor: '#F5FBFF',
                                backgroundColor: '#F5FBFF',
                            })}
                        >
                            <div
                                className="font-semibold"
                                style={{ fontSize: 12, marginTop: -5 }}
                            >
                                <strong className="text-xl">70</strong>
                            </div>
                            <p className="text-xs font-bold">Items Sold</p>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="p-2">
                        <ul className="flex flex-row justify-around text-sm">
                            <li className="list-disc marker:text-[#00CCF2]">
                                Today
                            </li>
                            <li className="list-disc marker:text-[#93969D]">
                                This Month
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
