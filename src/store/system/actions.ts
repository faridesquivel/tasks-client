import { SET_ERROR, SET_LOADING } from './types';

export function setError(error: string | null) {
    return {
      type: SET_ERROR,
      payload: {
        error
      }
    }
}
  
export function setLoading(loading: boolean) {
return {
    type: SET_LOADING,
    payload: {
        loading
    }
}
}