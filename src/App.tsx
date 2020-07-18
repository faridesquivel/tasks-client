import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './screens/AddTask';
import ListTasks from './screens/ListTasks';
import TaskDetail from './screens/TaskDetail';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import OpenRoute from './components/Routes/OpenRoute';
import './App.css';
import { RootState } from './store';
import { AuthState } from './store/auth/types';

export function App() {
  const dispatch = useDispatch();
  const authState = useSelector<RootState, AuthState>((state) => state.auth);
  
  const signOut = () => {
    dispatch({ type: 'SIGN_OUT' })
  };
  const isLoggedIn = authState.token === null;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuthenticated={isLoggedIn} signOut={signOut}/>
        <Switch>
          <OpenRoute exact path='/signUp' component={SignUp}/>
          <OpenRoute exact path='/signIn' component={SignIn}/>
          <ProtectedRoute exact path='/tasks' isAuthenticated={isLoggedIn} component={ListTasks}/>
          <ProtectedRoute exact path='/addTask' isAuthenticated={isLoggedIn} component={AddTask}/>
          <ProtectedRoute exact path='/taskDetail/:tid' isAuthenticated={isLoggedIn} component={TaskDetail}/>
          <Route exact path="/">
            <Redirect to="/tasks" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
