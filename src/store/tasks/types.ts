export interface Task {
    tid: string,
    text: string,
    date: string,
    completed: boolean
}

export interface TasksState {
    tasks: Task[],
    error: string | null,
    isLoading: boolean
}

export const CREATE_TASK = 'CREATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

interface AddTaskAction {
    type: typeof CREATE_TASK
    payload: Task
}

interface DeleteTaskAction {
    type: typeof DELETE_TASK,
    payload: {
        tid: string
    }
}

interface UpdateTaskAction {
    type: typeof UPDATE_TASK,
    payload: Task
}

export type TaskActionTypes = AddTaskAction | DeleteTaskAction | UpdateTaskAction;