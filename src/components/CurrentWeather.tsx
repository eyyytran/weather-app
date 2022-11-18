import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getWeatherByCityName, getWeatherByCoordinates } from '../features/weather/weatherSlice'
import Error from './Error'
import Loading from './Loading'
import WeatherDetails from './WeatherDetails'

const CurrentWeather = () => {
    const pageStatus = useAppSelector(state => state.weather.status)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords
                const coordinates = { latitude, longitude }
                dispatch(getWeatherByCoordinates(coordinates))
            })
        } else {
            dispatch(getWeatherByCityName('atlanta,ga,usa'))
        }
    }, [dispatch])

    return (
        <div className='page current-weather'>
            <div className='module current-weather'>
                {pageStatus === 'failed' ? (
                    <Error />
                ) : pageStatus !== 'succeeded' ? (
                    <Loading />
                ) : (
                    <WeatherDetails />
                )}
            </div>
        </div>
    )
}

export default CurrentWeather
