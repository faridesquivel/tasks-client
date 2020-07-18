import React, { useState, ChangeEvent } from 'react';
import { 
    Button, 
    CircularProgress, 
    FormGroup, 
    InputAdornment, 
    makeStyles, 
    TextField, 
    Typography 
} from '@material-ui/core'
import { AccountCircle, VpnKey } from '@material-ui/icons'

type AuthFormProps = {
    buttonText: string,
    error: string | null,
    isLoading: boolean,
    onSubmit: (email: string, password: string) => void
};

const AuthForm: React.FC<AuthFormProps> = ({ buttonText, error, isLoading, onSubmit }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const updateMail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const updatePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const doSubmit = (event: React.MouseEvent<HTMLElement>) => {
        onSubmit(email, password);
    }

    return(
        <FormGroup>
            <TextField 
                value={email} 
                onChange={updateMail} 
                margin="normal" 
                id="email" 
                label="Email" 
                variant="outlined" 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                }}
            />
            <TextField 
                value={password} 
                onChange={updatePassword} 
                margin="normal" 
                type="password"
                id="password" 
                label="Password" 
                variant="outlined" 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKey />
                      </InputAdornment>
                    ),
                }}
            />
            {error ? <Typography component="h1" variant="h6" className={classes.error}>
                {error}
            </Typography> : null}
            <Button variant="contained" color="primary" onClick={doSubmit}>
                {isLoading === false ? buttonText : <CircularProgress color="secondary" />}
            </Button>
        </FormGroup>
    );
};
const useStyles = makeStyles((theme) => ({
    error: {
        color: theme.palette.secondary.main
    }
}));

export default AuthForm;