import { 
    AuthState, AuthActionTypes, SIGN_IN, SIGN_UP, SIGN_OUT, SET_ERROR, SET_LOADING
} from './types';

const initialState: AuthState = {
    token: null,
    error: null,
    loading: false
}

export function AuthReducer (
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                error: null,
                loading: false,
                ...action.payload
            }
        case SIGN_UP:
            return {
                ...state,
                error: null,
                loading: false,
                ...action.payload
            }
        case SIGN_OUT:
            return initialState;
        case SET_ERROR:
            return {
                token: null,
                loading: false,
                ...action.payload
            }
        case SET_LOADING:
            return {
                error: null,
                token: null,
                ...action.payload
            }
        default:
            return state
    }
};