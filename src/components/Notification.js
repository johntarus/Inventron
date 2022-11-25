import React from 'react'

const Notification = () => {
    return (
        <div className="absolute top-12 right-0 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div className="text-md font-bold">Bonnie Green</div>
                {/* <div className="font-medium truncate">info@name.com</div> */}
            </div>

            <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200 "
                aria-labelledby="avatarButton"
            >
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        21 new sales
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        15 restocked items
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
        </div>
    )
}

export default Notification
