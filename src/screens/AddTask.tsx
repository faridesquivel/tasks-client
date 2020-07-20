import React from 'react';
import { Action } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { 
  Container,
  Typography, 
} from '@material-ui/core';
import { EventNote } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import TaskForm from '../components/Forms/TaskForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { TasksState, Task } from '../store/tasks/types';
import { createTaskThunk } from '../store/tasks/actions';
import { SystemState } from '../store/system/types';
import { setError } from '../store/system/actions';

type TasksDispatch = ThunkDispatch<TasksState, any, Action>;

const AddTask = () => {
    const classes = useStyles();
    const systemState = useSelector<RootState, SystemState>((state) => state.system);
    const dispatch: TasksDispatch = useDispatch();
    const onAddTask = (task: Task) => {
        dispatch(createTaskThunk(task))
    }
    const onSetError = (error: string) => {
        dispatch(setError(error))
    }

    return (
        <div>
            <Container fixed>
                <Typography component="h1" variant="h4" className={classes.marginTop}>
                    Add New Task <EventNote />
                </Typography>
                <TaskForm addTask={onAddTask} setError={onSetError} isLoading={systemState.loading} error={systemState.error}/>
            </Container>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    marginTop: {
        marginTop: theme.spacing(5),
    }
}));

export default AddTask;