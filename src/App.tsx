import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { decrement, increment } from './features/weather/weatherSlice'

function App() {
    const { counter } = useAppSelector(state => state.weather)
    const dispatch = useAppDispatch()
    return (
        <div className='App'>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default App
