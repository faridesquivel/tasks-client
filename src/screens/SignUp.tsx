import React from 'react';
import { connect, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { History } from 'history';
import { Avatar, Container, Link, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import AuthForm from '../components/Forms/AuthForm';
import { signUpThunk } from '../store/auth/actions';
import { Redirect } from 'react-router-dom';
import { AuthState } from '../store/auth/types';
import { RootState } from '../store';

type SignUpProps = {
    history: History,
    signUp: (email: string, password: string) => void
}

const SignUp = ({ history, signUp }: SignUpProps) => {
    const authState = useSelector<RootState, AuthState>((state) => state.auth);
    const classes = useStyles();
    const onSignUp = (email: string, password: string) => {
        signUp(email, password);
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
                Sign Up
                </Typography>
                <AuthForm 
                    buttonText="Sign Up" 
                    onSubmit={onSignUp} 
                    error={authState.error} 
                    isLoading={authState.loading}
                />
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => history.push('/signIn')}
                >
                    Already have an account? Log In
                </Link>
            </Container>
        </div>
        :
        <Redirect to="/tasks"></Redirect>
    );
};

const mapDispatch = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: any): any => {
    return {
        signUp: async (email: string, password: string) => {
            await dispatch(signUpThunk(email, password))
        }
    };
}
  
const connector = connect(null, mapDispatch);

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

export default connector(SignUp);