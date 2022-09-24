import React from 'react'
import hero from '../assets/hero.svg'

const Home = () => {
    return (
        // <div>
        //     <div className="font-bold mt-16 ml-2 md:ml-0 md:mt-2 text-xl text-gray-700">
        //         Dashboard
        //     </div>
        //     <div className="md:flex bg-white w-full justify-between rounded-xl lg:w-80 p-8 pt-9 m-3">
        //         <div className="m-0">
        //             <h1>Welcome back Tafari!</h1>
        //             <ul className="list-disc marker:text-[#FD9C29]">
        //                 <li>21 new sales</li>
        //             </ul>
        //             <ul className="list-disc marker:text-[#FD9C29]">
        //                 <li>15 new restocked items</li>
        //             </ul>
        //             <ul className="list-disc marker:text-[#FD9C29]">
        //                 <li>45 new pending credit sales reminders</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <div className="mt-16 ml-0 md:mt-0 rounded-xl md:w-4/5">
            <div className="my-2 font-bold text-xl">Dashboard</div>
            <div className="flex lg:flex-nowrap shadow-xl rounded-xl">
                <div className="bg-white md:flex block mx-10 h-auto w-full justify-between m-3 bg-no-repeat bg-cover bg-center">
                    {' '}
                    <div className="mb-0">
                        <h1 className="font-bold">Welcome back Tafari!</h1>{' '}
                        <p className="text-sm">
                            Since your last login in the system, there were:
                        </p>
                        <ul className="list-disc marker:text-[#FD9C29] text-sm ml-4">
                            <li>21 new sales</li>
                            <li>15 new restocked items</li>
                            <li>45 new pending credit sales reminders</li>
                        </ul>
                    </div>
                    <img src={hero} className="h-42 w-36" />
                </div>
            </div>
        </div>
    )
}

export default Home
