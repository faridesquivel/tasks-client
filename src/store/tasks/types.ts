export interface Task {
    _id: string,
    text: string,
    dueDate: string,
    completed: boolean
}

export interface TasksState {
    tasks: Task[],
    tasksUpdating: string[],
    tasksDeleting: string[],
    filter: string
}

export const CREATE_TASK = 'CREATE_TASK'
export const SET_TASKS = 'SET_TASKS'
export const SET_TASKS_FILTER = 'SET_TASKS_FILTER'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const ADD_UPDATING_TASK = 'ADD_UPDATING_TASK'
export const REMOVE_UPDATING_TASK = 'REMOVE_UPDATING_TASK'
export const ADD_DELETING_TASK = 'ADD_DELETING_TASK'
export const REMOVE_DELETING_TASK = 'REMOVE_DELETING_TASK'

interface AddTaskAction {
    type: typeof CREATE_TASK
    payload: Task
}

interface SetTasksAction {
    type: typeof SET_TASKS,
    payload: Task[]
}

interface SetTasksFilterAction {
    type: typeof SET_TASKS_FILTER,
    payload: string
}

interface DeleteTaskAction {
    type: typeof DELETE_TASK,
    payload: string
}

interface UpdateTaskAction {
    type: typeof UPDATE_TASK,
    payload: Task
}

interface AddUpdatingTasksAction {
    type: typeof ADD_UPDATING_TASK,
    payload: string
}

interface RemoveUpdatingTasksAction {
    type: typeof REMOVE_UPDATING_TASK,
    payload: string
}

interface AddDeletingTasksAction {
    type: typeof ADD_DELETING_TASK,
    payload: string
}

interface RemoveDeletingTasksAction {
    type: typeof REMOVE_DELETING_TASK,
    payload: string
}

export type TaskActionTypes = 
AddTaskAction | 
SetTasksAction | 
SetTasksFilterAction |
AddUpdatingTasksAction | 
DeleteTaskAction | 
UpdateTaskAction | 
RemoveUpdatingTasksAction |
AddDeletingTasksAction |
RemoveDeletingTasksAction;