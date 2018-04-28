import React,{ Component } from 'react';

import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch
} from 'react-router-dom';

import './main1.scss';

import M1child from './m1child';
class Main1 extends Component{
	render(){
		return(
			<div className='detail_main1'>
				<div className='main1_nav'>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child'>全部</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child2'>待支付</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child3'>待发货</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child4'>待收货</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child5'>待评价</NavLink>
				</div>

				<Switch>
					<Route path='/main1/m1child' component={M1child}></Route>
					<Route path='/main1/m1child' component={M1child}></Route>
					<Route path='/main1/m1child' component={M1child}></Route>
					<Route path='/main1/m1child' component={M1child}></Route>
					<Route path='/main1/m1child' component={M1child}></Route>
				</Switch>
			</div>
		)
	}
}
export default Main1