import { Outlet } from 'react-router-dom'
import SavedLocations from './SavedLocations'
import SearchBar from './SearchBar'

const WeatherApp = () => {
    return (
        <div className='container'>
            <Outlet />
            <SavedLocations />
            <SearchBar />
        </div>
    )
}

export default WeatherApp
