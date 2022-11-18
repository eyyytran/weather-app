import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const WeatherApp = () => {
    return (
        <div className='container'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default WeatherApp
