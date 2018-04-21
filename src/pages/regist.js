import React,{ Component } from 'react';
import './regist.scss';
import { Link } from 'react-router-dom';
import header from '../img/login_header.jpg';
class Regist extends Component{
	constructor(){
		super();
	}
	render(){

		return(
			<div className="cake_regist">
				<div className="regist_header">
					<img src={header} />
				</div>
				<div className='regis_main'>
					<input className='phone' type="text" placeholder='请输入您的手机号码'/>
					<div className='pagBox'>
						<input className='pagCode' type="text" placeholder='请输入图形验证'/>
						<span className="">获取短信验证码</span>
					</div>
					<div className='phoneBox'>
						<input className='phoneCode' type="text" placeholder='请输入短信验证码'/>
						<span className="">获取短信验证码</span>
					</div>
					<input className='pwd' type="password" placeholder='请输入密码'/>
					<input className='cfmpwd' type="password" placeholder='请再次输入密码'/>
					<input className='regist_submit' type="submit" value="立即注册" />
					<p>已有账号，<Link to='/login'>登陆 ></Link></p>
				</div>
			</div>
		)
	}
}

export default Regist