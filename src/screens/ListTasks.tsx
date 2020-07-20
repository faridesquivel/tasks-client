import React, { useEffect } from 'react';
import { 
    Container, 
    Grid, 
    Paper, 
    GridList, 
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    CircularProgress,
    IconButton
} from '@material-ui/core'
import { Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { TasksState, Task } from '../store/tasks/types';
import { RootState } from '../store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { setTasksThunk, deleteTaskThunk, updateTaskThunk } from '../store/tasks/actions';

type TasksDispatch = ThunkDispatch<TasksState, any, Action>;

const ListTasks = () => {
    const classes = useStyles();
    const tasksState = useSelector<RootState, TasksState>((state) => state.task);
    const dispatch: TasksDispatch = useDispatch();
    const updateTask = (task: Task) => {
        dispatch(updateTaskThunk(task))
    };
    const removeTask = (id: string) => {
        dispatch(deleteTaskThunk(id))
    };
    useEffect(() => {
        dispatch(setTasksThunk())
    }, [dispatch]);
    return (
        <Container>
            {tasksState.tasks.length ? <GridList className={classes.topGrid}>
                {tasksState.tasks
                .filter((task: Task) => task.text.toLowerCase().includes(tasksState.filter.toLowerCase()))
                .map((task: Task) => (
                    <Paper className={classes.paper} key={task._id} elevation={3}>
                        {
                            !tasksState.tasksDeleting.includes(task._id)
                            ?
                            <Grid item container className={classes.root}>
                                <Grid item xs container direction="column" spacing={2} className={classes.leftGrid}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6">
                                         {task.text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.rightGrid}>
                                    <Grid item>
                                        <TextField 
                                            value={task.dueDate} 
                                            className={classes.dateField}
                                            disabled={true}
                                            name="dueDate" 
                                            label="Due Date" 
                                            variant="outlined" 
                                            type="datetime-local"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        {
                                            !tasksState.tasksUpdating.includes(task._id) 
                                            ? 
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={task.completed}
                                                    name="completed"
                                                    onChange={() => updateTask({
                                                        ...task, 
                                                        completed: !task.completed
                                                    })}
                                                />
                                                }
                                                label="Completed"
                                            /> 
                                            : 
                                            <CircularProgress color="secondary"/>
                                        }
                                        <IconButton onClick={() => removeTask(task._id)}>
                                            <Delete color="secondary"/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            :
                            <CircularProgress color="secondary"/>
                        }
                    </Paper>
                ))}
            </GridList>
            :
            <Typography component="h1" variant="h6" className={classes.message}>
                No tasks found! Please add one and comeback
            </Typography>
        }
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    message: {
        marginTop: '20%',
        color: theme.palette.primary.main
    },
    topGrid: {
        marginTop: theme.spacing(3),
        marginBottom: '10% !important'
    },
    root: {
        flex: 1,
        height: '100%'
    },
    dateField: {
        marginLeft: '15px'
    },
    leftGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    rightGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    paper: {
        padding: theme.spacing(2),
        margin: '10px auto 10px auto',
        width: '95% !important',

    }
}));

export default ListTasks;