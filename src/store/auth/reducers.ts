import { 
    AuthState, AuthActionTypes, SIGN_IN, SIGN_UP, SIGN_OUT
} from './types';

export const initialState: AuthState = {
    token: null
}

export function AuthReducer (
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...action.payload
            }
        case SIGN_UP:
            return {
                ...action.payload
            }
        case SIGN_OUT:
            return initialState;
        default:
            return state
    }
};