import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import Header from './components/header/Header';
import HomePage from './pages/home/Home.Component';
import ShopPage from './pages/shop/Shop.Component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.Component';

import type { AppDispatch } from './redux/base.types';
import type { User } from '@firebase/auth-types';

import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

type Props = {
  setCurrentUser: Function,
}

const App = ({ setCurrentUser }: Props) => {  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch:AppDispatch) => ({
  setCurrentUser: (user:User | null) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
