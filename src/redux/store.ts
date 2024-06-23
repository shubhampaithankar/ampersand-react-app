import { configureStore } from '@reduxjs/toolkit'
import { authReducer, counterReducer } from './reducers'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
