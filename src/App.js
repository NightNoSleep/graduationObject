import React, { Component } from 'react';

//首页 购物篮 个人信息
import Cake from './index/cake';
import Cart from './cart/cart';
import Person from './person/person';
//注册和登录
//图片
import './font/iconfont.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
class App extends Component {
  constructor(){
    super();
    this.state={
      // isLogin:false
    }
  }
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
            <div className='foot_nav'><NavLink activeClassName='cake_nav' to='/cake'><i className='iconfont icon-zhuye'></i></NavLink></div>
            <div className='foot_nav'><NavLink activeClassName='cake_nav' to='/cart'><i className='iconfont icon-gouwulan'></i><span className='cart_amount'>0</span></NavLink></div>
            <div className='foot_nav'><NavLink activeClassName='cake_nav' to='/person'><i className='iconfont icon-fl-renyuan'></i></NavLink></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
