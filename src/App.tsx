import { Route, Routes } from 'react-router-dom'
import CurrentWeather from './components/CurrentWeather'
import Home from './components/Home'
import WeatherApp from './components/WeatherApp'

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/weather' element={<WeatherApp />}>
                    <Route path='your-weather' element={<CurrentWeather />} />
                </Route>
                <Route
                    path='*'
                    element={
                        <main>
                            <p>404: There's nothing here</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
