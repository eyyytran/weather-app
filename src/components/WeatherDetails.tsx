import { useAppSelector } from '../app/hooks'
import {
    faDroplet,
    faGauge,
    faMoon,
    faSun,
    faTemperatureHigh,
    faTemperatureLow,
    faWind,
    faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../features/weather/weatherSlice'
import IWeatherObj from '../interfaces/IWeatherObj'
import { useEffect, useState } from 'react'

const WeatherDetails = () => {
    const weather = useAppSelector(state => state.weather.currentWeather)
    const favorites = useAppSelector(state => state.weather.favoriteLocations)
    const dispatch = useDispatch()

    const [isFavorited, setIsFavorited] = useState(false)

    useEffect(() => {
        const determineIfFavorited = () => {
            if (favorites.find((obj: IWeatherObj) => obj.id === weather.id)) {
                setIsFavorited(true)
            } else {
                setIsFavorited(false)
            }
        }

        determineIfFavorited()
    }, [favorites, weather.id])

    return (
        <>
            <div className='top-section'>
                <h2>{weather.name}</h2>
                <div className='favorites-btn'>
                    <FontAwesomeIcon
                        icon={isFavorited ? faSolidHeart : faHeart}
                        size='2x'
                        onClick={() => {
                            if (isFavorited) {
                                dispatch(removeFromFavorites(weather.id))
                            } else {
                                dispatch(addToFavorites())
                            }
                        }}
                    />
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
