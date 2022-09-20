import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import home from '../assets/home.svg'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { dashBoardLinks } from '../assets/data'

const Sidebar = () => {
    const activeMenu = true
    const activeLink = `flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2`
    const normalLink = `flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white hover:text-gray-300 m-2`
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/home"
                            onClick={() => {}}
                            className="items-center gap-3 ml-3 pl-4 mt-4 flex text-3xl font-extrabold text-[#FFE6C9]"
                        >
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
                    <div className="mt-32">
                        {dashBoardLinks.map((link) => (
                            <NavLink
                                to={`/${link.linkName}`}
                                key={link.name}
                                onClick={() => {}}
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                <img
                                    src={link.icon}
                                    alt="link-icon"
                                    className="h-6 w-8 mr-1"
                                />
                                <span>{link.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar
