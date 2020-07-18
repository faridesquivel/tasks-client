import { Task, TaskActionTypes, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from './types'

export function createTask(task: Task): TaskActionTypes {
  return {
    type: CREATE_TASK,
    payload: task
  }
}

export function updateTask(task: Task): TaskActionTypes {
    return {
      type: UPDATE_TASK,
      payload: task
    }
}

export function deleteTask(tid: string): TaskActionTypes {
  return {
    type: DELETE_TASK,
    payload: {
        tid
    }
  }
}