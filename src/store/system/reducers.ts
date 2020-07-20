import { 
    SystemState, SystemActionTypes, SET_ERROR, SET_LOADING
} from './types';

export const initialState: SystemState = {
    error: null,
    loading: false
}

export function SystemReducer (
    state = initialState,
    action: SystemActionTypes
): SystemState {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                ...action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
};