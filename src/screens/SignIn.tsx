import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { History } from 'history';
import { Avatar, Container, Link, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import AuthForm from '../components/Forms/AuthForm';
import { signInThunk } from '../store/auth/actions';
import { Redirect } from 'react-router-dom';
import { AuthState } from '../store/auth/types';
import { RootState } from '../store';
import { Action } from 'redux';
import { SystemState } from '../store/system/types';
import { setError } from '../store/system/actions';

type SignInProps = {
    history: History,
    signIn: (email: string, password: string) => void
}
type AuthDispatch = ThunkDispatch<AuthState, any, Action>;

export const SignIn = ({ signIn, history }: SignInProps) => {
    const authState = useSelector<RootState, AuthState>((state) => state.auth);
    const systemState = useSelector<RootState, SystemState>((state) => state.system);
    const dispatch: AuthDispatch = useDispatch();
    const classes = useStyles();
    const onSignIn = (email: string, password: string) => {
        dispatch(signInThunk(email, password))
    }
    const onSetError = (error: string) => {
        dispatch(setError(error))
    }
    
    return (
        authState.token === null
        ?
        <div>
            <Container fixed>
                <div className={classes.centered}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                </div>
                <Typography component="h1" variant="h4">
                Sign in
                </Typography>
                <AuthForm 
                    buttonText="Sign In"
                    error={systemState.error} 
                    setError={onSetError}
                    isLoading={systemState.loading}
                    onSubmit={onSignIn}/>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => history.push('/signUp')}
                >
                    Don't have an account? Sign Up
                </Link>
            </Container>
        </div>
        :
        <Redirect to="/tasks"></Redirect>
    );
};

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        marginTop: theme.spacing(8),
    },
    centered: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default SignIn;