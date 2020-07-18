import React from 'react';
import { 
  Container,
  Avatar,
  Typography, 
} from '@material-ui/core';
import { EventNote } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import TaskForm from '../components/Forms/TaskForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { TasksState } from '../store/tasks/types';

const AddTask = () => {
    const classes = useStyles();
    const tasksState = useSelector<RootState, TasksState>((state) => state.task);
    return (
        <div>
            <Container fixed>
                <Typography component="h1" variant="h4" className={classes.marginTop}>
                    Add New Task <EventNote />
                </Typography>
                <TaskForm addTask={() => {}} isLoading={tasksState.isLoading} error={tasksState.error}/>
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