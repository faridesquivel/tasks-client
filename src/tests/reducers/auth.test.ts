import { AuthReducer } from "../../store/auth/reducers";
import { signOut, signUp, signIn } from "../../store/auth/actions";
import { initialState } from "../../store/auth/reducers";

describe('task actions', () => {
    it('should signin in reducer', () => {
        const state = AuthReducer(initialState, signIn(expect.any(String)))
        expect(state).toEqual({
            token: expect.any(String)
        });
    });
    it('should signup in reducer', () => {
        const state = AuthReducer(initialState, signUp(expect.any(String)))
        expect(state).toEqual({
            token: expect.any(String)
        });
    });
    it('should signout in reducer', () => {
        const state = AuthReducer(initialState, signOut())
        expect(state).toEqual({
            token: null
        });
    });
});