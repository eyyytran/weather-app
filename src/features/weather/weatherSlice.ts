import { createSlice } from '@reduxjs/toolkit'

interface WeatherState {
    counter: number
}

const initialState: WeatherState = {
    counter: 0,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        increment: state => {
            state.counter += 1
        },
        decrement: state => {
            state.counter -= 1
        },
    },
})

export const { increment, decrement } = weatherSlice.actions
export default weatherSlice.reducer
