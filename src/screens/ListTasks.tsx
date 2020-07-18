import React from 'react';
import { Container, Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { TasksState, Task } from '../store/tasks/types';
import { RootState } from '../store';

const ListTasks = () => {
    const tasksState = useSelector<RootState, TasksState>((state) => state.task);
    const classes = useStyles();
    console.log('Tsks stte is:', tasksState);
    return (
        <Container fixed>
            <Grid container className={classes.topGrid} spacing={10}>
                {tasksState.tasks.map((task: Task) => (
                    <Grid item xs={12}>
                        <Paper >xs=12</Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    topGrid: {
        marginTop: theme.spacing(3),
    }
}));

export default ListTasks;