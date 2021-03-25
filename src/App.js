import React, { Component, Suspense, lazy } from 'react';
import AppBar from './components/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Container from './components/Container/Container.jsx';
import MainContainer from './components/MainContainer/MainContainer.jsx';

const HomePage = lazy(() => import('./views/HomePage/HomePage.jsx'));
const Contacts = lazy(() => import('./views/Contacts/Contacts.jsx'));
const Register = lazy(() => import('./views/Register/Register.jsx'));
const Login = lazy(() => import('./views/Login/Login.jsx'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <MainContainer>
            <Switch>
              <PublicRoute exact path="/" component={HomePage} />
              <PrivateRoute
                path="/contacts"
                component={Contacts}
                redirectTo="/login"
              />
              <PublicRoute
                path="/register"
                restricted
                component={Register}
                redirectTo="/contacts"
              />
              <PublicRoute
                path="/login"
                restricted
                component={Login}
                redirectTo="/contacts"
              />
            </Switch>
          </MainContainer>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
