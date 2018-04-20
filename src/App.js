import React, { Component } from 'react';
import Cake from './pages/cake';
import Cart from './pages/cart';
import Person from './pages/person';
import Home from "./img/home.png";
import Shopping from "./img/shopping-basket.png";
import Mine from "./img/mine.png";
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='app_cake'>
          <div className='cake_main'>
            <Switch>
              <Route path='/cake' component={Cake}></Route>
              <Route path='/cart' component={Cart}></Route>
              <Route path='/person' component={Person}></Route>
              <Redirect path='/' to='/cake' exact></Redirect>
            </Switch>
          </div>
          <div className='footer_nav'>
            <div className='foot_nav'><NavLink activeClassName='cake_nav' to='/cake'><img src={Home} /></NavLink></div>
            <div className='foot_nav'><NavLink activeClassName='cake_nav' to='/cart'><img src={Shopping} /><span className='cart_amount'>0</span></NavLink></div>
            <div className='foot_nav'><NavLink activeClassName='cake_nav' to='/person'><img src={Mine} /></NavLink></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
