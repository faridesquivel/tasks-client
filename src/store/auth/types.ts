export interface AuthState {
    token: string | null,
    error: string | null,
    loading: boolean
}

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_OUT = 'SIGN_OUT'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'

interface SignInAction {
    type: typeof SIGN_IN
    payload: {
        token: string
    }
}

interface SignUpAction {
    type: typeof SIGN_UP
    payload: {
        token: string
    }
}

interface SignOutAction {
    type: typeof SIGN_OUT
}

interface SetError {
    type: typeof SET_ERROR,
    payload: {
        error: string | null
    }
}

interface SetLoading {
    type: typeof SET_LOADING,
    payload: {
        loading: boolean
    }
}

export type AuthActionTypes = SignInAction | SignUpAction | SignOutAction | SetError | SetLoading;