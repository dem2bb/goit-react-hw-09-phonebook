import React, { Suspense, lazy, useEffect } from 'react';
import AppBar from './components/AppBar/AppBar';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Container from './components/Container/Container.jsx';
import MainContainer from './components/MainContainer/MainContainer.jsx';

const HomePage = lazy(() => import('./views/HomePage/HomePage.jsx'));
const Contacts = lazy(() => import('./views/Contacts/Contacts.jsx'));
const Register = lazy(() => import('./views/Register/Register.jsx'));
const Login = lazy(() => import('./views/Login/Login.jsx'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <MainContainer>
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <Contacts />
            </PrivateRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <Register />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <Login />
            </PublicRoute>
          </Switch>
        </MainContainer>
      </Suspense>
    </Container>
  );
};

export default App;
