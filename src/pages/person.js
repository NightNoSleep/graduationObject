import React, { Component } from 'react';

// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link,
// 	NavLink
// } from 'react-router-dom';
import header from '../img/login_header.jpg';
import './person.scss'
class Person extends Component{
	constructor(){
		super();
	}

	render(){

		return(
			<div className="cake_person">
				<div className="person_header">
					<img src={header} />
				</div>
				<div className='person_login'>
					<input className='phone' type="text" placeholder="请输入您的手机号" />
					<input className='password' type="password" placeholder="请输入密码" />
					<input className="login_submit" type="submit" value="登  陆" />
					<button className="person_regist">立即注册</button>
				</div>
			</div>
		)
	}
}

export default Person