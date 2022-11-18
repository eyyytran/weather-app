import React, { FC } from 'react'
import IWeatherObj from '../interfaces/IWeatherObj'

interface Props {
    weather: IWeatherObj
}

const SavedLocationCard: FC<Props> = ({ weather }) => {
    return (
        <div className='location-card'>
            <h3>{weather.name}</h3>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt='small icon' />
            <div className='small-temp-container'>
                <p className='high-temp'>{weather.temperature.high} F</p>
                <p className='low-temp'>{weather.temperature.low} F</p>
            </div>
        </div>
    )
}

export default SavedLocationCard
