import React,{ Component } from 'react';
import './person.scss';

import Login from './login';
import Regist from './regist';
import QuickLogin from './quickLogin';
import Personal from './personal';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
class Person extends Component{
	constructor(){
		super();
		this.state={
			isLogin:true
		}
	}
	render(){
		if (localStorage.getItem('user')!=null) {
			this.state.isLogin = true;
		}
		return(
			<Router>
					<Switch>
						<Route path='/regist' component={Regist}></Route>
						<Route path='/login' component={Login}></Route>
						<Route path='/quickLogin' component={QuickLogin}></Route>
						<Route path='/personal' component={Personal}></Route>
						<Redirect to={this.state.isLogin?"/personal":"/login"}></Redirect>
					</Switch>
			</Router>
		)
	}
}

export default Person