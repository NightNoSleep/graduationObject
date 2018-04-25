import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import header from '../img/login_header.jpg';
import './login.scss'
import axios from 'axios';
class Login extends Component{
	constructor(){
		super();
		this.state = {
			phone:'',
			password:'',
			alert:'',
			canLogin:false
		}
		this.getPhone = this.getPhone.bind(this);
		this.getPwd = this.getPwd.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	render(){
		return(
			<div className="cake_login">
				<div className="login_header">
					<img src={header} alt=''/>
				</div>
				<div className='login_main'>
					<input className='phone' onBlur={this.getPhone} type="number" pattern="[0-9]*" placeholder="请输入您的手机号" />
					<input className='password' onBlur={this.getPwd} type="password" placeholder="请输入密码" />
					<Link to='/regist' className='loginToRegist'>忘记密码 ></Link>
					<input className='alert' readOnly unselectable="on" value={this.state.alert} />
					<input  className="login_submit" onClick={this.handleLogin} type="submit" value="登  陆" />
					<Link to='/regist' className="login_regist">立即注册</Link>
					<Link to='/quickLogin' className='quickLogin'>快速登录 ></Link>
				</div>
			</div>
		)
	}
	getPhone(e){
		var reg = /^1[3|4|5|8][0-9]\d{4,8}$/g,
			_this = this;
		if (reg.test(e.target.value)&&e.target.value!='') {
			this.setState({
				phone:e.target.value,
				alert:'',
				canLogin:true
			})
			
		}else{
			_this.setState({
				alert:'手机号格式不对'
			})
		}
	}
	getPwd(e){
		var reg = /\w{6,}/g;
		if (reg.test(e.target.value)) {
			this.setState({
				password:e.target.value,
				alert:''
			})
		}else{
			this.setState({
				alert:'密码至少6位'
			})
		}
	}
	handleLogin(){
		var _this = this;
		if (this.state.canLogin&&this.state.password!='') {
			axios.post("/api/login",{phone:this.state.phone,password:this.state.password}).then(function(res){
				if (res.data.code==0) {
					localStorage.setItem('cake_user',_this.state.phone);
					_this.props.history.replace('/personal');
				}
			})
		}
	}
}

export default Login