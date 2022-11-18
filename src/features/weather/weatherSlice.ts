import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface WeatherState {
    currentWeather: any
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: any
}

type Coordinates = {
    latitude: number
    longitude: number
}

const initialState: WeatherState = {
    currentWeather: {},

    status: 'idle',
    error: null,
} as WeatherState

export const getWeatherByCityName = createAsyncThunk(
    'weather/useCityNameForCurrent',
    async (cityName: string) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
        )
        const data = await response.json()
        return data
    }
)

export const getWeatherByCoordinates = createAsyncThunk(
    'weather/useCoordinatesForCurrent',
    async (coordinates: Coordinates) => {
        const { latitude, longitude } = coordinates
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
        )
        const data = await response.json()
        return data
    }
)

const formatTime = (unix: number) => {
    const date = new Date(unix * 1000)
    const hours = date.getHours().toString()
    const mins = date.getMinutes().toString().substr(-2)
    return `${hours}:${mins}`
}

const cleanCurrentWeatherData = (payload: any) => {
    return {
        name: payload.name,
        id: payload.id,
        conditions: payload.weather[0].description,
        icon: payload.weather[0].icon,
        temperature: {
            actual: payload.main.temp,
            feelsLike: payload.main.feels_like,
            high: payload.main.temp_max,
            low: payload.main.temp_min,
        },
        wind: payload.wind.speed,
        pressure: payload.main.pressure,
        humidity: payload.main.humidity,
        sunrise: formatTime(payload.sys.sunrise),
        sunset: formatTime(payload.sys.sunset),
    }
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getWeatherByCityName.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(getWeatherByCityName.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'
                state.currentWeather = cleanCurrentWeatherData(payload)
            })
            .addCase(getWeatherByCityName.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getWeatherByCoordinates.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(getWeatherByCoordinates.fulfilled, (state, { payload }) => {
                state.currentWeather = cleanCurrentWeatherData(payload)
                state.status = 'succeeded'
            })
            .addCase(getWeatherByCoordinates.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default weatherSlice.reducer
