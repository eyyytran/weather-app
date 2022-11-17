import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
interface WeatherState {
    weather: any
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: any
}

const initialState: WeatherState = {
    weather: [],
    status: 'idle',
    error: null,
} as WeatherState

export const getWeatherByCityName = createAsyncThunk('weather/getWeather', async userInput => {
    const cityName = 'atlanta'
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
    )
    const data = await response.json()
    return data
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
            .addCase(getWeatherByCityName.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(getWeatherByCityName.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'
                state.weather = [...state.weather, payload]
            })
            .addCase(getWeatherByCityName.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

// export const { increment, decrement } = weatherSlice.actions
export default weatherSlice.reducer
