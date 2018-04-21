import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import header from '../img/login_header.jpg';
import './login.scss'
class Login extends Component{
	constructor(){
		super();
	}

	render(){

		return(
			<div className="cake_login">
				<div className="login_header">
					<img src={header} />
				</div>
				<div className='login_main'>
					<input className='phone' type="text" placeholder="请输入您的手机号" />
					<input className='password' type="password" placeholder="请输入密码" />
					<Link to='/regist' className='loginToRegist'>忘记密码 ></Link>
					<input className="login_submit" type="submit" value="登  陆" />
					<Link to='/regist' className="login_regist">立即注册</Link>
					<Link to='/quickLogin' className='quickLogin'>快速登录 ></Link>
				</div>
			</div>
		)
	}
}

export default Login