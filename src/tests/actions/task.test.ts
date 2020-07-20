import { 
    addDeletingTask, 
    addUpdatingTask, 
    createTask, 
    deleteTask, 
    removeDeletingTask, 
    removeUpdatingTask,
    setTasks,
    setTasksFilter,
    updateTask, 
    createTaskThunk
} from '../../store/tasks/actions';
import { 
    ADD_DELETING_TASK,
    ADD_UPDATING_TASK,
    CREATE_TASK,
    DELETE_TASK,
    REMOVE_DELETING_TASK,
    REMOVE_UPDATING_TASK,
    SET_TASKS,
    SET_TASKS_FILTER ,
    UPDATE_TASK,
    Task,
    TasksState
} from '../../store/tasks/types';
import { rootReducer, RootState } from '../../store'
import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch, ThunkAction } from 'redux-thunk'
import { AnyAction, Action } from 'redux';
import fetchMock from 'fetch-mock'
import { setError, setLoading } from '../../store/system/actions';
import { TaskReducer } from '../../store/tasks/reducers';
const middlewares = [thunk]
const mockStore = configureMockStore<any, ThunkDispatch<TasksState, any, AnyAction>>(middlewares)

describe('async actions', () => {

  it('should dispatch create actions after thunk', () => {
    const task: Task = {
        _id: expect.any(String),
        completed: true,
        dueDate: '2020-07-12T10:55',
        text: 'Task text'
    };
    const expectedActions = [
        setError(null),
        setLoading(true)
    ]

    const store = mockStore(TaskReducer)
    fetchMock.get('*', { response: 200 })
    store.dispatch(createTaskThunk(task))
    console.log('actions', store.getActions())

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('task actions', () => {
    it('should add deleting task', () => {
        const tid = expect.any(String);
        const expectedAction = {
            type: ADD_DELETING_TASK,
            payload: tid
        }
        expect(addDeletingTask(tid)).toEqual(expectedAction);
    });
    it('should add updating task', () => {
        const tid = expect.any(String);
        const expectedAction = {
            type: ADD_UPDATING_TASK,
            payload: tid
        }
        expect(addUpdatingTask(tid)).toEqual(expectedAction);
    });
    it('should add create a task', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const expectedAction = {
            type: CREATE_TASK,
            payload: task
        }
        expect(createTask(task)).toEqual(expectedAction);
    });
    it('should add create a task', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const expectedAction = {
            type: DELETE_TASK,
            payload: task._id
        }
        expect(deleteTask(task._id)).toEqual(expectedAction);
    });
    it('should remove deleting task', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const expectedAction = {
            type: REMOVE_DELETING_TASK,
            payload: task._id
        }
        expect(removeDeletingTask(task._id)).toEqual(expectedAction);
    });
    it('should remove updating task', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const expectedAction = {
            type: REMOVE_UPDATING_TASK,
            payload: task._id
        }
        expect(removeUpdatingTask(task._id)).toEqual(expectedAction);
    });
    it('should set tasks', () => {
        const task1: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const task2: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-08-12T10:55',
            text: 'Task2 text'
        };
        const tasks: Task[] = [task1, task2];
        const expectedAction = {
            type: SET_TASKS,
            payload: tasks
        }
        expect(setTasks(tasks)).toEqual(expectedAction);
    });
    it('should set tasks filter', () => {
        const filterText = 'filter';
        const expectedAction = {
            type: SET_TASKS_FILTER,
            payload: filterText
        }
        expect(setTasksFilter(filterText)).toEqual(expectedAction);
    });
    it('should update a task', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const expectedAction = {
            type: UPDATE_TASK,
            payload: task
        }
        expect(updateTask(task)).toEqual(expectedAction);
    });
});