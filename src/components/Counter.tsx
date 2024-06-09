import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { decrement, increment, incrementByAmount } from '../redux/reducers/counterReducer'

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <div>
                <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            </div>
        </div>
    )
}
