import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/Home.Component';
import ShopPage from './pages/shop/Shop.Component';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
