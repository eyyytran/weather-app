import { useAppSelector } from '../app/hooks'
import {
    faDroplet,
    faGauge,
    faMoon,
    faSun,
    faTemperatureHigh,
    faTemperatureLow,
    faWind,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const WeatherDetails = () => {
    const weather = useAppSelector(state => state.weather.currentWeather)
    return (
        <>
            <div className='top-section'>
                <h2>{weather.name}</h2>
                <div className='favorites-btn'>
                    <FontAwesomeIcon icon={faHeart} size='2x' />
                </div>

                <img
                    src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                    alt='weather conditions'
                />
                <p>{weather.conditions}</p>
                <h1>{weather.temperature.actual} F</h1>
            </div>
            <div className='middle-section'>
                <div className='small-section'>
                    <FontAwesomeIcon icon={faWind} />
                    <p>{weather.wind} mi/hr</p>
                </div>
                <div className='small-section'>
                    <FontAwesomeIcon icon={faDroplet} />
                    <p>{weather.humidity}%</p>
                </div>
                <div className='small-section'>
                    <FontAwesomeIcon icon={faGauge} />
                    <p>{weather.pressure} hPa</p>
                </div>
            </div>
            <div className='bottom-section'>
                <div className='medium-section'>
                    <FontAwesomeIcon icon={faTemperatureHigh} size='2x' />
                    <p>{weather.temperature.high} F</p>
                </div>
                <div className='medium-section'>
                    <FontAwesomeIcon icon={faTemperatureLow} size='2x' />
                    <p>{weather.temperature.low} F</p>
                </div>
                <div className='medium-section'>
                    <FontAwesomeIcon icon={faSun} size='2x' />
                    <p>{weather.sunrise}</p>
                </div>
                <div className='medium-section'>
                    <FontAwesomeIcon icon={faMoon} size='2x' />
                    <p>{weather.sunset}</p>
                </div>
            </div>
        </>
    )
}

export default WeatherDetails
