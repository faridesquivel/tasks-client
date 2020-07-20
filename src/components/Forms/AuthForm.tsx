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
    setError: (error: string) => void,
    isLoading: boolean,
    onSubmit: (email: string, password: string) => void
};

const AuthForm: React.FC<AuthFormProps> = ({ buttonText, error, setError, isLoading, onSubmit }) => {
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
        if (!email) {
            setError('Please provide an email')
            return;
        }
        if (!password) {
            setError('Please provide a password')
            return;
        }
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
            {isLoading !== true ? 
                <Button variant="contained" color="primary" onClick={doSubmit}>
                    {buttonText}
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
    loading: {
        margin: 'auto'
    }
}));

export default AuthForm;