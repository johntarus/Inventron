import React, { useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsFillEyeFill } from 'react-icons/bs'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import customers from '../assets/customers.svg'
import copy from '../assets/copy.svg'
import wallet from '../assets/wallet.svg'
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const SideItems = () => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }
    return (
        <div className="w-full md:w-1/4 px-2 md:pl-12 md:fixed md:right-0">
            <div className="relative bg-[#FF007C] w-full h-[110px] rounded-xl mb-2">
                <div className="absolute left-4 bottom-2 text-white">
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-sm pr-3">+KES 90,000</p>{' '}
                        <BsFillEyeFill className="cursor-pointer" />
                    </div>
                    <p className="text-[8px] ml-2">Revenue This Month</p>
                </div>

                <div className="absolute bottom-2 right-2">
                    <BsFillArrowUpRightCircleFill
                        className="hover:rotate-45 hover:fill-[#A72D68] cursor-pointer bg-white break-inside-avoid rounded-full"
                        fill="#FF007C"
                    />
                </div>
            </div>
            <div className="relative flex flex-row text-white">
                <div className="relative bg-[#2D62ED] w-full h-[100px] rounded-xl mb-2 mr-1">
                    <img src={copy} className="absolute top-2 left-4 w-4 h-8" />
                    <div className="absolute left-4 bottom-2">
                        <p className="font-bold">12</p>
                        <p className="text-[8px]">Pending</p>
                        <p className="text-[8px]">Credit Sales</p>
                    </div>
                    <div className="absolute bottom-2 right-2">
                        <BsFillArrowUpRightCircleFill
                            className="hover:rotate-45 cursor-pointer bg-white break-inside-avoid rounded-full"
                            fill="#D2DAFF"
                        />
                    </div>
                </div>
                <div className="relative bg-[#FD9C29] w-full h-[100px] rounded-xl mb-2">
                    <img
                        src={customers}
                        className="absolute top-2 left-4 w-4 h-8"
                    />
                    <div className="absolute left-4 bottom-2">
                        <p className="font-bold">400</p>
                        <p className="text-[8px]">My</p>
                        <p className="text-[8px]">Customers</p>
                    </div>
                    <div className="absolute bottom-2 right-2">
                        <BsFillArrowUpRightCircleFill
                            className="hover:rotate-45 hover:fill-[#9329FE] cursor-pointer bg-white break-inside-avoid rounded-full"
                            fill="#D2DAFF"
                        />
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
                    <div className="absolute bottom-2 right-2">
                        <BsFillArrowUpRightCircleFill
                            className="hover:rotate-45 hover:fill-[#9329FE] cursor-pointer bg-white break-inside-avoid rounded-full"
                            fill="#D2DAFF"
                        />
                    </div>
                </div>

                <div className="relative bg-[#9329FE] w-full h-[100px] rounded-xl mb-2">
                    <img
                        src={wallet}
                        className="absolute top-2 left-4 w-4 h-8"
                    />
                    <div className="absolute left-4 bottom-2">
                        <p className="font-bold">KES*****</p>
                        <p className="text-[8px]">Wallet</p>
                        <p className="text-[8px]">Balance</p>
                    </div>
                    <div
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        className="absolute bottom-2 right-2"
                    >
                        {' '}
                        {isHovering && (
                            <BsFillArrowRightCircleFill
                                className="cursor-pointer bg-[#BA58E6] overflow-hidden break-inside-avoid rounded-full"
                                fill="#D2DAFF"
                            />
                        )}
                        {!isHovering && (
                            <BsFillEyeFill
                                className="cursor-pointer bg-[#BA58E6] overflow-hidden break-inside-avoid rounded-full"
                                fill="#D2DAFF"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="relative shadow-xl rounded-xl p-5">
                <div className="flex justify-between p-2 mb-1">
                    <p className="font-bold">Quick Inventory</p>
                    <BiDotsVerticalRounded className="cursor-pointer" />
                </div>
                <div className="flex justify-center items-center">
                    <CircularProgressbarWithChildren
                        value={70}
                        background={true}
                        className="h-36 md:h-28 w-28"
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
                <div className="p-2 pb-4">
                    <ul className="absolute flex flex-row left-8 bottom-4 gap-8 text-xs">
                        <li className="list-disc marker:text-[#00CCF2] font-bold">
                            Today
                        </li>
                        <li className="list-disc marker:text-[#93969D] text-gray-500">
                            This Month
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideItems
