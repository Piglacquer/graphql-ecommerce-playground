import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home/Home.Component';
import ShopPage from './pages/shop/Shop.Component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.Component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useAuthentication } from './hooks/firebase-auth-hook';

import './App.css';


const App = () => {
  const user = useAuthentication();
  console.warn('yeet user', user);
  // useEffect(() => {
  //   auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       if (userRef) {
  //         userRef.onSnapshot(snapshot => {
  //           setUser({
  //             id: snapshot.id,
  //             ...snapshot.data()
  //           })
  //         })
  //       }
  //     } else {
  //       setUser(userAuth)
  //     }
  //   })
  // }, [user?.id]);
  
  return (
    <div className="App">
      <Header currentUser={user}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
