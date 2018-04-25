import React,{ Component } from 'react';
import axios from 'axios';
import './regist.scss';
import { Link } from 'react-router-dom';
import header from '../img/login_header.jpg';

import regist from '../php/regist.php';
class Regist extends Component{
	constructor(){
		super();
		this.state = {
			img_path:'',
			img_text:'',
			phone:'',
			pwd:'',
			cfmPwd:'',
			alert:'',
			canLogin:false
		}
		this.getPhone = this.getPhone.bind(this);
		this.getCode = this.getCode.bind(this);
		this.changeCode = this.changeCode.bind(this);
		this.getPwd = this.getPwd.bind(this);
		this.getCfmPwd = this.getCfmPwd.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render(){
		return(
			<div className="cake_regist">
				<div className="regist_header">
					<img src={header} alt=''/>
				</div>
				<div className='regis_main'>
					<input className='phone' onBlur={this.getPhone}  type="number" placeholder='请输入您的手机号码'/>
					<div className='pagBox'>
						<input className='pagCode' onBlur={this.getCode} type="text" placeholder='请输入图形验证'/>
						<span className="img_path" onClick={this.changeCode}><img src={this.state.img_path} alt="" /></span>
					</div>
					<input className='pwd' onBlur={this.getPwd} type="password" placeholder='请输入密码'/>
					<input className='cfmpwd' onBlur={this.getCfmPwd} type="password" placeholder='请再次输入密码'/>
					<input className='alert' readOnly unselectable="on" value={this.state.alert} />
					<input className='regist_submit' onClick={this.handleSubmit} type="submit" value="立即注册" />
					<p>已有账号，<Link to='/login'>登陆 ></Link></p>
				</div>
			</div>
		)
	}
	componentDidMount(){
		var _this = this;
		this.getImgCode(_this);
	}
	//获取手机号 并验证 成功后设置状态
	getPhone(e){
		var reg = /^1[3|4|5|8][0-9]\d{4,8}$/g;
		var _this = this;
		if (reg.test(e.target.value)&&e.target.value!='') {
			this.setState({
				phone:e.target.value,
				alert:''
			},function(){
				axios.get("http://localhost/cake/check.php?phone="+this.state.phone).then(function(res){
					if (res.data.res_body.status == 0) {
						_this.setState({
							alert:'手机号可以注册'
						})
					}else{
						_this.setState({
							alert:'手机号已注册'
						})
					}
				})
			})
			
		}else{
			this.setState({
				alert:'手机号格式不对'
			})
		}

	}
	//获取验证码 并验证 成功后设置状态
	getCode(e){
		if (this.state.img_text!=e.target.value) {
			this.setState({
				alert:'验证码不正确',
				canLogin:false
			})
		}else{
			this.setState({
				alert:'',
				canLogin:true
			})
		}
	}
	//获取密码 并验证 成功后设置状态
	getPwd(e){
		var reg = /\w{6,}/g;
		if (reg.test(e.target.value)) {
			this.setState({
				pwd:e.target.value,
				alert:''
			})
		}else{
			this.setState({
				alert:'密码至少6位'
			})
		}
	}
	//获取第二次密码 并验证 
	getCfmPwd(e){
		if (this.state.pwd == e.target.value) {
			this.setState({
				cfmPwd:e.target.value,
				alert:''
			})
		}else{
			this.setState({
				alert:'密码不一致'
			})
		}
	}
	handleSubmit(e){
		e.preventDefault();
		var _this = this;
		if (this.state.canLogin&&this.state.phone!=''&&this.state.cfmPwd!='') {
			axios.get('http://localhost:/regist.php?phone='+this.state.phone+'&password='+this.state.pwd).then(function(res){
				if (res.data.res_code == 0) 
					_this.props.history.push('/login');
				else{
					_this.setState({
						alert:'注册失败，请重新填写'
					})
				}
			})
		}
	}
	changeCode(){
		this.getImgCode(this)
	}
	getImgCode(_this){
		axios.get('http://route.showapi.com/26-4?showapi_appid=56258&showapi_sign=ca1c501a62a64987bfdf56b275f79fdb&textproducer_char_string=abcde2345678').then(function(res){
			if (res.data.showapi_res_code == 0) {
				_this.setState({
					img_path:res.data.showapi_res_body.img_path,
					img_text:res.data.showapi_res_body.text
				})
			}
		})
	}
}

export default Regist