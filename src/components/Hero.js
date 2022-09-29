import React from 'react'
import hero from '../assets/hero.svg'

const Hero = () => {
    return (
        <div>
            <div className="my-4 font-bold text-xl ml-4 md:ml-0">Dashboard</div>
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
        </div>
    )
}

export default Hero
