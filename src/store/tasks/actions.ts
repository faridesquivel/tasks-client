import { 
  Task, 
  TaskActionTypes, 
  CREATE_TASK, 
  SET_TASKS, 
  UPDATE_TASK, 
  DELETE_TASK, 
  ADD_UPDATING_TASK, 
  REMOVE_UPDATING_TASK,
  ADD_DELETING_TASK,
  REMOVE_DELETING_TASK,
  SET_TASKS_FILTER
} from './types'
import { setError, setLoading } from '../system/actions';
import api from '../../api/api';
import {store} from '../index';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { history } from '../../App';

export function createTask(task: Task): TaskActionTypes {
  return {
    type: CREATE_TASK,
    payload: task
  }
}

export const createTaskThunk = (
  task: Task
): ThunkAction<void, {}, {}, Action> => async dispatch => {
  try {
    dispatch(setError(null))
    dispatch(setLoading(true))
    const asyncResp = await api.post('/tasks', {
      task
    }, {
      headers: {
        'Authorization': store.getState().auth.token
      }
    });
    if (asyncResp.data) {
      dispatch(
        createTask(asyncResp.data)
      )
      history.push('/tasks')
    }
  } catch (error) {
    console.log('error', error.response);
    dispatch(
      setError(error.response.data.error)
    );
  } finally {
    dispatch(setLoading(false))
  }
}

export function setTasks(tasks: Task[]): TaskActionTypes {
    return {
      type: SET_TASKS,
      payload: tasks
    }
}

export function setTasksFilter(task: string): TaskActionTypes {
  return {
    type: SET_TASKS_FILTER,
    payload: task
  }
}

export const setTasksThunk = (
): ThunkAction<void, {}, {}, Action> => async dispatch => {
  try {
    dispatch(setError(null))
    dispatch(setLoading(true))
    const asyncResp = await api.get('/tasks', {
      headers: {
        'Authorization': store.getState().auth.token
      }
    });
    if (asyncResp.data) {
      dispatch(
        setTasks(asyncResp.data)
      )
    }
  } catch (error) {
    console.log('error', error.response);
    dispatch(
      setError(error.response)
    );
  } finally {
    dispatch(setLoading(false))
  }
}

export function updateTask(task: Task): TaskActionTypes {
    return {
      type: UPDATE_TASK,
      payload: task
    }
}

export const updateTaskThunk = (
  task: Task
): ThunkAction<void, {}, {}, Action> => async dispatch => {
  try {
    dispatch(addUpdatingTask(task._id))
    const asyncResp = await api.put('/tasks', {
      task
    }, {
      headers: {
        'Authorization': store.getState().auth.token
      }
    });
    if (asyncResp.data) {
      dispatch(
        updateTask(task)
      )
    }
  } catch (error) {
    console.log('error', error.response);
    dispatch(
      setError(error.response.data.error)
    );
  } finally {
    dispatch(removeUpdatingTask(task._id))
  }
}

export function deleteTask(tid: string): TaskActionTypes {
  return {
    type: DELETE_TASK,
    payload: tid
  }
}

export const deleteTaskThunk = (
  tid: string
): ThunkAction<void, {}, {}, Action> => async dispatch => {
  try {
    dispatch(addDeletingTask(tid))
    const asyncResp = await api.delete(`/tasks/${tid}`, {
      headers: {
        'Authorization': store.getState().auth.token
      }
    });
    if (asyncResp.data) {
      dispatch(
        deleteTask(tid)
      )
    }
  } catch (error) {
    console.log('error', error.response);
    dispatch(
      setError(error.response)
    );
  } finally {
    dispatch(removeDeletingTask(tid))
  }
}

export function addUpdatingTask(tid: string): TaskActionTypes {
  return {
    type: ADD_UPDATING_TASK,
    payload: tid
  }
}

export function removeUpdatingTask(tid: string): TaskActionTypes {
  return {
    type: REMOVE_UPDATING_TASK,
    payload: tid
  }
}

export function addDeletingTask(tid: string): TaskActionTypes {
  return {
    type: ADD_DELETING_TASK,
    payload: tid
  }
}

export function removeDeletingTask(tid: string): TaskActionTypes {
  return {
    type: REMOVE_DELETING_TASK,
    payload: tid
  }
}