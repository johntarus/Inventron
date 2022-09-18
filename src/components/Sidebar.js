import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import home from '../assets/home.svg'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { dashBoardLinks } from '../assets/data'

const Sidebar = () => {
    const activeMenu = true
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        {/* <div className="mt-4 text-3xl font-extrabold text-[#FFE6C9]">
                            <h1>Inventron</h1>
                        </div> */}

                        <Link
                            to="/"
                            onClick={() => {}}
                            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold text-[#FFE6C9]"
                        >
                            <img
                                src={home}
                                alt="home-icon"
                                className="h-6 w-8 mr-4"
                            />
                            Inventron
                        </Link>
                        <TooltipComponent
                            content="menu"
                            position="BottomCenter"
                        >
                            <button
                                type="button"
                                onClick={() => {}}
                                className="text-xl rounded-full p-3 mt-4 md:hidden block"
                            >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-10">
                        {dashBoardLinks.map((link, index) => (
                            <div key={index} className="text-white m-3 mt-4">
                                {link.name}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar
