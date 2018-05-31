import React,{ Component } from 'react';

import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch
} from 'react-router-dom';

import './main1.scss';

import M1child1 from './m1child1';
import M1child2 from './m1child2';
import M1child3 from './m1child3';
import M1child4 from './m1child4';
import M1child5 from './m1child5';
class Main1 extends Component{
	render(){
		return(
			<div className='detail_main1'>
				<div className='main1_nav'>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child1'>全部</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child2'>待支付</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child3'>待发货</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child4'>待收货</NavLink>
					<NavLink activeClassName='curr_m1child' to='/main1/m1child5'>待评价</NavLink>
				</div>

				<Switch>
					<Route path='/main1/m1child1' component={M1child1}></Route>
					<Route path='/main1/m1child2' component={M1child2}></Route>
					<Route path='/main1/m1child3' component={M1child3}></Route>
					<Route path='/main1/m1child4' component={M1child4}></Route>
					<Route path='/main1/m1child5' component={M1child5}></Route>
				</Switch>
			</div>
		)
	}
}
export default Main1