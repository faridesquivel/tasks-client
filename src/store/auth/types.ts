export interface AuthState {
    token: string | null
}

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_OUT = 'SIGN_OUT'

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

export type AuthActionTypes = SignInAction | SignUpAction | SignOutAction;