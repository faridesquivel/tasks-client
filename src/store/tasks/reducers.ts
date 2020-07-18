import { 
    TasksState, TaskActionTypes, CREATE_TASK, Task
} from './types';


export const taskInitialState: Task = {
    tid: '',
    text: '',
    completed: false,
    date: ''
}

const initialState: TasksState = {
    tasks: [],
    error: null,
    isLoading: false
}

export function TaskReducer (
    state = initialState,
    action: TaskActionTypes
): TasksState {
    switch (action.type) {
        case CREATE_TASK:
            return {
                isLoading: false,
                error: null,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }
};