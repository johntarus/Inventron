import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext()
const initialState = {
    notification: false,
    profile: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (isClicked) => {
        setIsClicked({ ...initialState, [isClicked]: true })
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)
