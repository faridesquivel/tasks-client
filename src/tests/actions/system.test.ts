import { setError, setLoading } from '../../store/system/actions';
import { SET_ERROR, SET_LOADING } from '../../store/system/types';

describe('system actions', () => {
    it('should set error message', () => {
        const error = 'Failed login';
        const expectedAction = {
            type: SET_ERROR,
            payload: {
                error
            }
        }
        expect(setError(error)).toEqual(expectedAction);
    });

    it('should set loading state', () => {
        const loading = true;
        const expectedAction = {
            type: SET_LOADING,
            payload: {
                loading
            }
        }
        expect(setLoading(loading)).toEqual(expectedAction);
    });
});