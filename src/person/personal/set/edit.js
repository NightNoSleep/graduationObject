import React,{ Component } from 'react';
import './edit.scss';
import axios from 'axios';

class Editpwd extends Component{
	constructor(){
		super();
		this.state = {
			oldPwd:'',
			newPwd:'',
			alert:'',
			show:false
		}
		this.edit = this.edit.bind(this);
		this.oldPwd = this.oldPwd.bind(this);
		this.newPwd = this.newPwd.bind(this);
		this.cfmPwd = this.cfmPwd.bind(this);
	}
	render(){
		return(
			<div className='editpwd' >
				<input type="text" onBlur={this.oldPwd} placeholder="请输入旧密码"/>
				<input type="password" onBlur={this.newPwd} placeholder="请输入新的密码"/>
				<input type="password" onBlur={this.cfmPwd} placeholder="请再次输入密码"/>
				<input type="text" className="alertInput" value={this.state.alert} readOnly style={{visibility:this.state.show?"visible":"hidden"}} />
				<button onClick={this.edit}>确认修改</button>
			</div>
		)
	}
	oldPwd(e){
		if(e.target.value!=""&&e.target.value.length>5){
			this.setState({
				oldPwd:e.target.value.trim()
			})
		}else{
			this.setState({
				alert:"旧密码长度为6为以上",
				show:true
			})
		}
	}
	newPwd(e){
		if(e.target.value!=""&&e.target.value.length>5){
			this.setState({
				newPwd:e.target.value.trim(),
				show:false
			})
		}else{
			this.setState({
				alert:"密码长度为6位以上",
				show:true
			})
		}
	}
	cfmPwd(e){
		if(e.target.value.trim()!=this.state.newPwd){
			this.setState({
				newPwd:"",
				show:true,
				alert:"密码不一致"
			})
		}
	}
	edit(){
		if (this.state.oldPwd!=""&&this.state.newPwd!="") {
			axios.post('/api/editPwd',{phone:JSON.parse(localStorage.getItem('cake_user')),oldPwd:this.state.oldPwd,newPwd:this.state.newPwd}).then((res)=>{
				if (res.data.code===0) {
					this.setState({
						alert:res.data.msg,
						show:true
					},()=>{
						setTimeout(()=>{
							this.props.history.replace('/personal')
						},800)
					})
				}else{
					this.setState({
						alert:res.data.msg,
						show:true
					})
				}
			})
		}
	}
}
export default Editpwd