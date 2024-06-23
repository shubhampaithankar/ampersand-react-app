import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    id: string;
    username: string;
    avatar: string;
    email?: string;
    discriminator?: string;
  } | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string; user: { id: string; username: string; discriminator: string; avatar: string; email?: string } }>) => {
            state.isAuthenticated = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.token = null
            state.user = null
        },
        updateUser: (state, action: PayloadAction<{ id: string; username: string; discriminator: string; avatar: string; email?: string }>) => {
            if (state.isAuthenticated && state.user) {
                state.user.id = action.payload.id
                state.user.username = action.payload.username
                state.user.discriminator = action.payload.discriminator
                state.user.avatar = action.payload.avatar
                if (action.payload.email) {
                    state.user.email = action.payload.email
                }
            }
        },
    },
})

export const { login, logout, updateUser } = authSlice.actions
export default authSlice.reducer
