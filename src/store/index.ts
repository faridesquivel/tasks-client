import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './auth/reducers';
import { TaskReducer } from './tasks/reducers';
const rootReducer = combineReducers({
    auth: AuthReducer,
    task: TaskReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;