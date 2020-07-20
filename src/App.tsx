import React, { ChangeEvent } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
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
import { signOut } from './store/auth/actions';
import { setTasksFilter } from './store/tasks/actions';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory(); 

export function App() {
  const dispatch = useDispatch();
  const authState = useSelector<RootState, AuthState>((state) => state.auth);
  
  const onSignOut = () => {
    dispatch(signOut());
  };
  const setFilter = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTasksFilter(event.target.value))
  }
  const isLoggedIn = authState.token !== null;
  return (
    <div className="App">
      <Router history={history}>
        {isLoggedIn ? <Navbar onFilterChange={setFilter} signOut={onSignOut}/> : null}
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
      </Router>
    </div>
  );
}

export default App;
