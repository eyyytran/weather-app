import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchWeather } from './features/weather/weatherSlice'

function App() {
    const weather = useAppSelector(state => state.weather.weather)
    const dispatch = useAppDispatch()

    return (
        <div className='App'>
            <form>
                <input type='text' name='searchBar' />
                <button type='submit'>Get Weather</button>
            </form>
            <button onClick={() => dispatch(fetchWeather())}>IDK CLICK HERE!</button>
            {JSON.stringify(weather[0])}
        </div>
    )
}

export default App
