import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home/Home.Component';
import ShopPage from './pages/shop/Shop.Component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.Component';
import { auth } from './firebase/firebase.utils';
import './App.css';


const App = () => {
  const [ user, setUser ] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);
  
  console.warn('yeet user', user);
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
