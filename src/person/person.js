import React,{ Component } from 'react';
import './person.scss';

import Login from './login';
import Regist from './regist';
import QuickLogin from './quickLogin';
import Personal from './personal';
import Ticket from './personal/set/ticket';

import Main1 from './personal/main1/main1';
import Set from './personal/set/set';

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
			isLogin:false
		}
	}
	render(){
		if (localStorage.getItem('cake_user')!=null) 
			this.state.isLogin = true;
		return(
			<Router>
					<Switch>
						<Route path='/regist' component={Regist}></Route>
						<Route path='/quickLogin' component={QuickLogin}></Route>
						<Route path='/personal' component={Personal}></Route>
						<Route path='/main1' component={Main1}></Route>
						<Route path='/set' component={Set}></Route>
						<Route path='/ticket' component={Ticket}></Route>
						<Route path='/login' component={Login}></Route>
						<Redirect to={this.state.isLogin?"/personal":"/login"} exact></Redirect>
					</Switch>
			</Router>
		)
	}
}

export default Person