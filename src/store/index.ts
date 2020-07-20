import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './auth/reducers';
import { TaskReducer } from './tasks/reducers';
import { SystemReducer } from './system/reducers';
export const rootReducer = combineReducers({
    auth: AuthReducer,
    task: TaskReducer,
    system: SystemReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;