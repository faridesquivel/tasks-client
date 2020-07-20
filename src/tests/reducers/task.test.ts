import { initialState, TaskReducer } from "../../store/tasks/reducers";
import { createTask, setTasks, updateTask, deleteTask, addUpdatingTask, removeUpdatingTask, addDeletingTask, removeDeletingTask } from "../../store/tasks/actions";
import { Task, TasksState } from "../../store/tasks/types";

describe('task actions', () => {
    it('should create a task in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const taskExpectedState: TasksState = {
            filter: '',
            tasks: [task],
            tasksDeleting: [],
            tasksUpdating: []
        }
        const state = TaskReducer(initialState, createTask(task))
        expect(state).toEqual(taskExpectedState);
    });
    it('should set tasks in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const task2: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task2 text'
        };
        const tasks: Task[] = [task, task2]
        const taskExpectedState: TasksState = {
            filter: '',
            tasks: tasks,
            tasksDeleting: [],
            tasksUpdating: []
        }

        const state = TaskReducer(initialState, setTasks(tasks))
        expect(state).toEqual(taskExpectedState);
    });
    it('should update task in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const task2: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task2 text'
        };
        const taskUpdated: Task = {
            _id: task._id,
            completed: true,
            dueDate: '2021-07-12T10:55',
            text: 'Task2 text'
        };
        const taskWithoutUpdateState: TasksState = {
            filter: '',
            tasks: [task, task2],
            tasksDeleting: [],
            tasksUpdating: []
        }
        const updatedTaskState: TasksState = {
            filter: '',
            tasks: [taskUpdated, task2],
            tasksDeleting: [],
            tasksUpdating: []
        }
        const state = TaskReducer(taskWithoutUpdateState, updateTask(taskUpdated))
        expect(state).toEqual(updatedTaskState);
    });
    it('should delete task in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const task2: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task2 text'
        };
        const taskWithoutDeleteState: TasksState = {
            filter: '',
            tasks: [task, task2],
            tasksDeleting: [],
            tasksUpdating: []
        }
        const deletedTaskState: TasksState = {
            filter: '',
            tasks: [task2],
            tasksDeleting: [],
            tasksUpdating: []
        }
        const state = TaskReducer(taskWithoutDeleteState, deleteTask(task._id))
        expect(state).toEqual(deletedTaskState);
    });
    it('should add task to updating in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const updatingTaskState: TasksState = {
            filter: '',
            tasks: [],
            tasksDeleting: [],
            tasksUpdating: [task._id]
        }
        const state = TaskReducer(initialState, addUpdatingTask(task._id))
        expect(state).toEqual(updatingTaskState);
    });
    it('should remove task from updating in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const updatingTaskInitialState: TasksState = {
            filter: '',
            tasks: [],
            tasksDeleting: [],
            tasksUpdating: [task._id]
        }
        const updatingExpectedTaskState: TasksState = {
            filter: '',
            tasks: [],
            tasksDeleting: [],
            tasksUpdating: []
        }
        const state = TaskReducer(updatingTaskInitialState, removeUpdatingTask(task._id))
        expect(state).toEqual(updatingExpectedTaskState);
    });
    it('should add task to deleting in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const deletingTaskState: TasksState = {
            filter: '',
            tasks: [],
            tasksDeleting: [task._id],
            tasksUpdating: []
        }
        const state = TaskReducer(initialState, addDeletingTask(task._id))
        expect(state).toEqual(deletingTaskState);
    });
    it('should remove task from deleting in reducer', () => {
        const task: Task = {
            _id: expect.any(String),
            completed: true,
            dueDate: '2020-07-12T10:55',
            text: 'Task text'
        };
        const deletingTaskInitialState: TasksState = {
            filter: '',
            tasks: [],
            tasksDeleting: [task._id],
            tasksUpdating: []
        }
        const deletingExpectedTaskState: TasksState = {
            filter: '',
            tasks: [],
            tasksDeleting: [],
            tasksUpdating: []
        }
        const state = TaskReducer(deletingTaskInitialState, removeDeletingTask(task._id))
        expect(state).toEqual(deletingExpectedTaskState);
    });
});