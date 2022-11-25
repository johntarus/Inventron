import React from 'react'

const UserProfile = () => {
    // const user = window.localStorage.getItem('token')
    // console.log(user.username)
    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <div className="absolute top-12 right-0 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div className="text-md font-bold">user</div>
                {/* <div className="font-medium truncate">info@name.com</div> */}
            </div>
            <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="avatarButton"
            >
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Dashboard
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Settings
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Earnings
                    </a>
                </li>
            </ul>
            <div className="flex justify-center w-full py-1">
                <button
                    onClick={logout}
                    className="block py-2 rounded-md px-16 text-sm text-whites hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default UserProfile
