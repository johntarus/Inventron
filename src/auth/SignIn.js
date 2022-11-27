import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/data'
const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [successful, setSuccessful] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        await api
            .post('/api/v1/auth/signin', {
                email,
                password,
                username,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            })
            .then((response) => {
                localStorage.setItem('token', JSON.stringify(response.data))
                if (response.status === 200) {
                    setSuccessful('Logged in successfully')
                    setTimeout(() => {
                        navigate('/')
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
                    setError('Login Failed')
                }
            })
        setUsername(''), setEmail(''), setPassword('')
    }

    return (
        <div className="mx-auto p-6 md:mt-24 mt-32 rounded-lg shadow-lg bg-white max-w-sm">
            <h2 className="text-xl font-semibold mb-6 text-center">Sign In</h2>
            <p className="mb-2 text-center text-red-500 rounded-lg">{error}</p>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-6">
                    <label
                        htmlFor="username"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Username
                    </label>
                    <input
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
          focus:text-gray-700 focus:bg-white focus:border-[#9329FE] focus:outline-none"
                        placeholder="Enter Username"
                        required
                    />
                </div>
                <div className="form-group mb-6">
                    <label
                        htmlFor="email"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
          focus:text-gray-700 focus:bg-white focus:border-[#9329FE] focus:outline-none"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="form-group mb-4">
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
          focus:text-gray-700 focus:bg-white focus:border-[#9329FE] focus:outline-none"
                        placeholder="Password"
                        required
                    ></input>
                </div>
                <div className="form-group mb-6"></div>
                <button
                    type="submit"
                    className="
        w-full
        px-6
        py-2.5
        bg-[#9329FE]
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-[#9329FE] hover:shadow-lg
        focus:bg-[#9329FE] focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-[#9329FE] active:shadow-lg
        transition
        duration-150
        ease-in-out"
                >
                    Sign In
                </button>
                <p className="mb-2 text-center text-green-500 rounded-lg">
                    {successful}
                </p>
                <p className="text-gray-800 mt-6 text-center">
                    Don't have an account? {''}
                    <Link
                        to="/signup"
                        className="text-[#9329FE] hover:text-[#9329FE] focus:text-[#9329FE] transition duration-200 ease-in-out"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default SignIn
