import { SystemReducer, initialState } from '../../store/system/reducers';
import { setError } from '../../store/system/actions';
import { SET_ERROR, SET_LOADING } from '../../store/system/types';

describe('task actions', () => {
    it('should set error text in reducer', () => {
        const state = SystemReducer(initialState, { type: SET_ERROR, payload: { error: 'Error text' }})
        expect(state).toEqual({
            error: 'Error text',
            loading: false
        });
    });
    it('should set error to null in reducer', () => {
        const state = SystemReducer(initialState, { type: SET_ERROR, payload: { error: null }})
        expect(state).toEqual({
            error: null,
            loading: false
        });
    });
    it('should set loading in reducer', () => {
        const state = SystemReducer(initialState, { type: SET_LOADING, payload: { loading: true }})
        expect(state).toEqual({
            error: null,
            loading: true
        });
    });
    it('should set loading false in reducer', () => {
        const state = SystemReducer(initialState, { type: SET_LOADING, payload: { loading: false }})
        expect(state).toEqual({
            error: null,
            loading: false
        });
    });
});