import { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SavedLocationCard from './SavedLocationCard'
import IWeatherObj from '../interfaces/IWeatherObj'

const SavedLocations = () => {
    const favorites = useAppSelector(state => state.weather.favoriteLocations)
    const [openTab, setOpenTab] = useState(false)
    return (
        <div className={`${openTab ? 'is-open' : ''} saved-locations-container`}>
            <div className='tab' onClick={() => setOpenTab(!openTab)}>
                <FontAwesomeIcon icon={faBars} size='2x' />
            </div>
            <div className='saved-locations'>
                {favorites.map((favorite: IWeatherObj) => (
                    <SavedLocationCard weather={favorite} key={favorite.id} />
                ))}
            </div>
        </div>
    )
}

export default SavedLocations
