import { Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Home from './components/Home'
import WeatherPage from './components/WeatherPage'
import { getWeatherByCityName } from './features/weather/weatherSlice'

function App() {
    const weather = useAppSelector(state => state.weather.weather)
    const dispatch = useAppDispatch()

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/weather' element={<WeatherPage />} />
            </Routes>
        </div>
    )
}

export default App
