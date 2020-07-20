export interface SystemState {
    error: string | null,
    loading: boolean
}

export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'

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

export type SystemActionTypes = SetError | SetLoading;