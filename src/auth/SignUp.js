import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [successful, setSuccessful] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        axios
            .post('https://interview.inventron.co/api/v1/auth/signup', {
                userName,
                email,
                password,
                firstName,
                lastName,
                phone,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 200) {
                    setSuccessful('Registered successfully')
                    setTimeout(() => {
                        navigate('/signin')
                    }, 2000)
                }
            })
            .catch((error) => {
                if (!error?.response) {
                    setError('No Server Response')
                } else if (error.response?.status === 404) {
                    setError('User not found')
                } else if (error.response?.status === 401) {
                    setError('Email or password is incorrect')
                } else {
                    setError('Sign Up Failed')
                }
            })
        setUserName(''), setEmail(''), setPassword('')
    }

    return (
        <div className="mx-auto p-6 md:mt-0 mt-12 rounded-lg shadow-lg bg-white max-w-sm">
            <h2 className="text-xl font-semibold mb-6 text-center">Sign Up</h2>
            <p className="mb-2 text-center text-red-500 rounded-lg">{error}</p>
            <form onSubmit={handleRegister}>
                <label
                    htmlFor="username"
                    className="form-label inline-block mb-2 text-gray-700"
                >
                    Username
                </label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
                    placeholder="Enter Username"
                    required
                />

                <label
                    htmlFor="firstName"
                    className="form-label inline-block mb-2 text-gray-700"
                >
                    FirstName
                </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
                    placeholder="Enter First Name"
                    required
                />
                <label
                    htmlFor="username"
                    className="form-label inline-block mb-2 text-gray-700"
                >
                    LastName
                </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
                    placeholder="Enter Lastname"
                    required
                />
                <label
                    htmlFor="username"
                    className="form-label inline-block mb-2 text-gray-700"
                >
                    Phone
                </label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
                    placeholder="Enter Phone Number"
                    required
                />

                <div className="form-group mb-2">
                    <label
                        htmlFor="email"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
                        placeholder="Enter Email"
                        required
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label
                        htmlFor="Password"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
                        placeholder="Password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="
        w-full
        px-6
        py-2.5
        bg-[#9333EA]
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-[#9333EA] hover:shadow-lg
        focus:bg-[#9333EA] focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-[#9333EA] active:shadow-lg
        transition
        duration-150
        ease-in-out"
                >
                    Sign Up
                </button>
                <p className="text-green-500 mb-2 text-center rounded-lg">
                    {successful}
                </p>
                <p className="text-gray-800 mt-6 text-center">
                    Already have an account? {''}
                    <Link
                        to="/signin"
                        className="text-[#9333EA] hover:text-[#9333EA] focus:text-[#9333EA] transition duration-200 ease-in-out"
                    >
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default SignUp
