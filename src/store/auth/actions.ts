import { SIGN_IN, SIGN_UP, SIGN_OUT, SET_ERROR, SET_LOADING, AuthActionTypes } from './types'
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import api from '../../api/api';

export function signIn(token: string): AuthActionTypes {
  return {
    type: SIGN_IN,
    payload: { 
        token
    }
  }
}

export const signInThunk = (
  email: string,
  password: string
): ThunkAction<void, {}, {}, AnyAction> => async dispatch => {
  try {
    dispatch(setLoading(true))
    const asyncResp = await api.post('/signin', {
      email,
      password
    });
    if (asyncResp.data.token) {
      dispatch(
        signIn(asyncResp.data.token)
      )
    }
  } catch (error) {
    dispatch(
      setError(error.response.data.error)
    );
    console.log('error');
  }
}

export function signUp(token: string): AuthActionTypes {
    return {
      type: SIGN_UP,
      payload: { 
          token 
      }
    }
}

export const signUpThunk = (
  email: string,
  password: string
): ThunkAction<void, {}, {}, AnyAction> => async dispatch => {
  try {
    dispatch(setLoading(true))
    const asyncResp = await api.post('/signup', {
      email,
      password
    });
    if (asyncResp) {
      dispatch(
        signUp(asyncResp.data.token)
      )
    }
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 409) {
      dispatch(setError('Email already exists'));
    } else {
      dispatch(
        setError(error.response.data)
      );
    }
  }
}

export function signOut(): AuthActionTypes {
  return {
    type: SIGN_OUT
  }
}

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