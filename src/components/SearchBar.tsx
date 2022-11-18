import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { getWeatherByCityName } from '../features/weather/weatherSlice'

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState<string>('')
    const handleSearch = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(getWeatherByCityName(searchInput))
    }

    return (
        <div className='search-container'>
            <form className='search-bar' onSubmit={handleSearch}>
                <input
                    type='search'
                    className='search-input'
                    placeholder='Type to Search'
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
                <button className='search-btn' type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
