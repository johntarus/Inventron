import React, { useState, useEffect } from 'react'
import { Notification, UserProfile } from './'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import { HiOutlineUserCircle } from 'react-icons/hi'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-2 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </TooltipComponent>
)

const Navbar = () => {
    // const [profile, setProfile] = useState(null)
    const [clicked, setClicked] = useState(false)

    const handleClicked = () => {
        setClicked(!clicked)
    }

    const {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
    } = useStateContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if (screenSize < 900) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <div className="flex justify-between p-2 md:mx-6 relative ">
            <NavButton
                title="Menu"
                customFunc={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                color="#2951FE"
                icon={<AiOutlineMenu />}
            />
            <div className="flex">
                <form className="hidden md:block mx-4">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block p-1 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-black-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                            required
                        />
                    </div>
                </form>{' '}
                <div className="hover:bg-gray-300 rounded-lg mx-4">
                    {' '}
                    <NavButton
                        title="Notifications"
                        dotColor="#2951FE"
                        customFunc={() => handleClick()}
                        color="#808080"
                        icon={<IoIosNotificationsOutline />}
                    />
                </div>
                <div content="profile" position="BottomCenter">
                    <div className="flex items-center p-0 gap-2 cursor-pointer hover:bg-gray-300 rounded-lg">
                        <NavButton
                            title="Profile"
                            customFunc={() => handleClicked()}
                            color="#808080"
                            icon={<HiOutlineUserCircle />}
                        />
                    </div>
                </div>
                {clicked && <UserProfile />}
                {/* {profile && navigate('/signup')} */}
            </div>
        </div>
    )
}

export default Navbar
