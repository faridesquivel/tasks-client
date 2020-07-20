import { SIGN_IN, SIGN_UP, SIGN_OUT, AuthActionTypes } from './types'
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { setLoading, setError } from '../system/actions';
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
    dispatch(setError(null))
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
    console.log('error', error.response);
    if (error.response && error.response.data && error.response.data.error) {
      dispatch(
        setError(error.response.data.error)
      );
    } else {
      dispatch(
        setError('No se pudo iniciar sesión, por favor intenta nuevamente')
      )
    }
  } finally {
    dispatch(setLoading(false))
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
    dispatch(setError(null))
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
    if (error.response && error.response.status === 409) {
      dispatch(setError('Email already exists'));
    } else {
      if (error.response && error.response.data) {
        dispatch(
          setError(error.response.data)
        );
      } else {
        dispatch(
          setError('No se pudo iniciar sesión, por favor intenta nuevamente')
        )
      }
    }
  } finally {
    dispatch(setLoading(false));
  }
}

export function signOut(): AuthActionTypes {
  return {
    type: SIGN_OUT
  }
}