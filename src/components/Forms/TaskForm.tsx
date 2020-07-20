import React, { ChangeEvent } from "react";
import { 
  Button, 
  Checkbox,
  CircularProgress, 
  FormControlLabel,
  FormGroup, 
  TextField, 
  InputAdornment, 
  Typography, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Description } from '@material-ui/icons';
import { Task } from "../../store/tasks/types";
import { taskInitialState } from "../../store/tasks/reducers";

type NewTaskInputProps = {
  addTask(task: Task): void;
  setError(error: string): void;
  error: string | null;
  isLoading: boolean;
}

const TaskForm: React.FC<NewTaskInputProps> = ({ addTask, isLoading, error, setError }) => {
  const classes = useStyles();
  const [task, setTask] = React.useState(taskInitialState);

  const updateTask = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value, name } = event.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: (value || name !== 'completed') ? value : checked
    }));
  };


  const doSubmit = (event: React.MouseEvent<HTMLElement>) => {
    if (!task.text) {
      setError('Please add a description')
      return;
    }
    if (!task.dueDate) {
      setError('Please set a due date')
      return;
    }
    addTask(task);
  }

  return (
    <FormGroup>
      <TextField 
          value={task.text} 
          onChange={updateTask} 
          margin="normal" 
          name="text" 
          label="Task" 
          variant="outlined" 
          InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Description />
                </InputAdornment>
              ),
          }}
      />
      <TextField 
          value={task.dueDate} 
          onChange={updateTask}
          margin="normal" 
          name="dueDate" 
          label="Date" 
          variant="outlined" 
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
      />
      <FormControlLabel
        className={classes.centered}
        control={
          <Checkbox
            checked={task.completed}
            onChange={updateTask}
            name="completed"
          />
        }
        label="Mark as Completed"
      />
      {error ? <Typography component="h1" variant="h6" className={classes.error}>
          {error}
      </Typography> : null}

      {isLoading !== true ? 
        <Button variant="contained" color="primary" onClick={doSubmit}>
          Add task
        </Button>
            : 
        <CircularProgress color="secondary" className={classes.loading}/>
      }
    </FormGroup>
  );
};
const useStyles = makeStyles((theme) => ({
    error: {
        color: theme.palette.secondary.main
    },
    centered: {
      justifyContent: 'center'
    },
    loading: {
      margin: 'auto'
    }
}));

export default TaskForm;