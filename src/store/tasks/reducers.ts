import { 
    TasksState, 
    TaskActionTypes, 
    Task, 
    CREATE_TASK, 
    SET_TASKS, 
    DELETE_TASK, 
    UPDATE_TASK, 
    ADD_UPDATING_TASK,
    REMOVE_UPDATING_TASK,
    ADD_DELETING_TASK,
    REMOVE_DELETING_TASK,
    SET_TASKS_FILTER
} from './types';


export const taskInitialState: Task = {
    _id: '',
    text: '',
    completed: false,
    dueDate: ''
}

export const initialState: TasksState = {
    tasks: [],
    tasksUpdating: [],
    tasksDeleting: [],
    filter: ''
}

export function TaskReducer (
    state = initialState,
    action: TaskActionTypes
): TasksState {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case SET_TASKS_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case UPDATE_TASK: 
            return {
                ...state,
                tasks: state.tasks.map((task: Task) => {
                    if (task._id === action.payload._id) {
                        return {
                            ...action.payload
                        }
                    }
                    return task;
                })
            };
        case DELETE_TASK: 
            return {
                ...state,
                tasks: state.tasks.filter((task: Task) => task._id !== action.payload)
            };
        case ADD_UPDATING_TASK:
            return {
                ...state,
                tasksUpdating: [...state.tasksUpdating, action.payload]
            }
        case REMOVE_UPDATING_TASK:
            return {
                ...state,
                tasksUpdating: state.tasksUpdating.filter((tid: string) => tid !== action.payload)
            }
        case ADD_DELETING_TASK:
            return {
                ...state,
                tasksDeleting: [...state.tasksDeleting, action.payload]
            }
        case REMOVE_DELETING_TASK:
            return {
                ...state,
                tasksDeleting: state.tasksDeleting.filter((tid: string) => tid !== action.payload)
            }
        default:
            return state
    }
};