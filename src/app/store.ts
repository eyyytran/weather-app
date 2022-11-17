import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import weatherReducer from '../features/weather/weatherSlice'

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger, thunk),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
