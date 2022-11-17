import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className='theSun'>
                <div className='theCloud'></div>
            </div>
            <h1>Andrea Tran</h1>
            <h2>Take Home Project for TimelyMd</h2>
            <div className='home-btn-container'>
                <Link to='/weather' className='primary-btn'>
                    Continue to Weather App
                </Link>
            </div>
        </div>
    )
}

export default Home
