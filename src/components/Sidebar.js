import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { dashBoardLinks } from '../assets/data'
import profile from '../assets/profile.jpg'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext()

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize < 900) {
            setActiveMenu(false)
        }
    }

    const activeLink = `flex items-center gap-4 pt-3 pb-2.5 rounded-lg text-white text-sm`
    const normalLink = `flex items-center gap-4 pt-6 md:pt-3 pb-2.5 my-4 rounded-lg text-sm text-white text-xs hover:text-gray-300`
    return (
        <div className="relative h-screen md:overflow-hidden ml-2 overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/home"
                            onClick={handleCloseSideBar}
                            className="items-center gap-2 mt-4 flex text-3xl font-extrabold text-[#FFE6C9]"
                        >
                            Inventron
                        </Link>
                        <TooltipComponent
                            content="Menu"
                            position="BottomCenter"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveMenu(
                                        (prevActiveMenu) => !prevActiveMenu
                                    )
                                }
                                className="text-xl rounded-full p-3 mt-4 md:hidden block"
                            >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-20">
                        {dashBoardLinks.map((link) => (
                            <NavLink
                                to={`/${link.linkName}`}
                                key={link.name}
                                onClick={handleCloseSideBar}
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                <img
                                    src={link.icon}
                                    alt="link-icon"
                                    className="h-4 w-6 mr-1"
                                />
                                <span>{link.name}</span>
                            </NavLink>
                        ))}
                    </div>
                    <div className="absolute flex bottom-6 md:bottom-4 -ml-6 cursor-pointer">
                        <img
                            src={profile}
                            className="ml-8 h-6 w-6 rounded-full ring-2 mr-2 ring-white"
                        />
                        <div className="flex flex-col text-xs">
                            <p className="text-bold">Tafari Mwangi</p>
                            <p className="flex items-center font-extralight text-gray-400">
                                Active
                                <span>
                                    {
                                        <RiArrowDropDownLine
                                            style={{ fontSize: '14px' }}
                                        />
                                    }
                                </span>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar
