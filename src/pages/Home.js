import React from 'react'
import hero from '../assets/hero.svg'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsFillEyeFill } from 'react-icons/bs'
import customers from '../assets/customers.svg'
import copy from '../assets/copy.svg'
import wallet from '../assets/wallet.svg'
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Home = () => {
    return (
        <div className="relative flex flex-col md:flex-row mt-14 text-gray-600">
            <div className="flex flex-col md:ml-4 w-full md:pr-6 md:w-3/4">
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
                    <p>
                        Where does it come from? Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical Latin literature from 45 BC, making
                        it over 2000 years old. Richard McClintock, a Latin
                        professor at Hampden-Sydney College in Virginia, looked
                        up one of the more obscure Latin words, consectetur,
                        from a Lorem Ipsum passage, and going through the cites
                        of the word in classical literature, discovered the
                        undoubtable source. Lorem Ipsum comes from sections
                        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45
                        BC. This book is a treatise on the theory of ethics,
                        very popular during the Renaissance. The first line of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
                        a line in section 1.10.32. The standard chunk of Lorem
                        Ipsum used since the 1500s is reproduced below for those
                        interested. Sections 1.10.32 and 1.10.33 from "de
                        Finibus Bonorum et Malorum" by Cicero are also
                        reproduced in their exact original form, accompanied by
                        English versions from the 1914 translation by H.
                        Rackham.Where does it come from? Contrary to popular
                        belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45
                        BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going
                        through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes
                        from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                        et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory
                        of ethics, very popular during the Renaissance. The
                        first line of Lorem Ipsum, "Lorem ipsum dolor sit
                        amet..", comes from a line in section 1.10.32. The
                        standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested. Sections 1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914
                        translation by H. Rackham.Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32. The standard chunk of Lorem Ipsum used since
                        the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                        Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the
                        1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
            {/* Side Items */}
            <div className="w-full md:w-1/4 px-2 md:pl-12 md:fixed md:right-0">
                <div className="relative bg-[#FF007C] w-full h-[110px] rounded-xl mb-2">
                    <div className="absolute left-4 bottom-2 text-white">
                        <div className="flex flex-row items-center">
                            <p className="font-bold text-sm pr-3">
                                +KES 90,000
                            </p>{' '}
                            <BsFillEyeFill />
                        </div>
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
                        <ul className="flex flex-row justify-around text-xs">
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
        </div>
    )
}

export default Home
