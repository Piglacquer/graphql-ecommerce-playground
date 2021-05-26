import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home/Home.Component';
import ShopPage from './pages/shop/Shop.Component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.Component';
import { useAuthentication } from './hooks/firebase-auth/firebase-auth-hook';

import './App.css';

const App: React.FC = () => {
  const user = useAuthentication();
  
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
