import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${process.env.REACT_APP_API_KEY}`

interface WeatherState {
    weather: any
    status: string
    error: any
}

const initialState: WeatherState = {
    weather: [],
    status: 'idle', //idle, loading, succeeded, failed
    error: null,
}

export const fetchWeather = createAsyncThunk('weather/getWeather', async () => {
    try {
        const response = await fetch(WEATHER_URL)
        const json = await response.json()
        return json
    } catch (error) {
        return error
    }
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addWeather: (state, { payload }) => {
            state.weather = [...state.weather, payload]
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchWeather.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchWeather.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'
                state.weather = [...state.weather, payload]
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

// export const { increment, decrement } = weatherSlice.actions
export default weatherSlice.reducer
