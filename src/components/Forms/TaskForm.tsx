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
  error: string | null;
  isLoading: boolean;
}

const TaskForm: React.FC<NewTaskInputProps> = ({ addTask, isLoading, error }) => {
  const classes = useStyles();
  const [task, setTask] = React.useState(taskInitialState);

  const updateTask = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  const doSubmit = (event: React.MouseEvent<HTMLElement>) => {
    console.log('Will send: ', task);
    // addTask(task);
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
          value={task.date} 
          onChange={updateTask}
          margin="normal" 
          name="date" 
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
            indeterminate
          />
        }
        label="Completed"
      />
      {error ? <Typography component="h1" variant="h6" className={classes.error}>
          {error}
      </Typography> : null}
      <Button variant="contained" color="primary" onClick={doSubmit}>
          {isLoading === false ? 'Add Task' : <CircularProgress color="primary" />}
      </Button>
    </FormGroup>
  );
};
const useStyles = makeStyles((theme) => ({
    error: {
        color: theme.palette.secondary.main
    },
    centered: {
      justifyContent: 'center'
    }
}));

export default TaskForm;