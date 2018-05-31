import React,{ Component } from 'react';
import './set.scss';
import Editpwd from './edit';
import Address from './address';
import Ticket from './ticket';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
class Set extends Component{
	constructor(){
		super();
		this.state = {
			alert:false,
			edil:false
		}
		this.handleOut = this.handleOut.bind(this);
		this.sure = this.sure.bind(this);
		this.goChild = this.goChild.bind(this);
	}
	render(){
		return(
			<div className='set_main set-title'>
				<div style={{display:this.state.edit?"none":"block"}}>
					<Link to='/set/editpwd' onClick={this.goChild}>修改密码<i className='iconfont icon-iconfonticonfonti2copycopy'></i></Link>
					<Link to='/set/address' onClick={this.goChild}>收货地址<i className='iconfont icon-iconfonticonfonti2copycopy'></i></Link>
					<Link to='/set/ticket' onClick={this.goChild}>发票管理<i className='iconfont icon-iconfonticonfonti2copycopy'></i></Link>
					<p className='out' onClick={this.handleOut}>退出当前账号</p>
				</div>
				<div className='alert' onClick={this.sure} style={{display:this.state.alert?"block":"none"}}>
					<div>是否确认退出？</div>
					<button className='no'>取消</button>
					<button className='yes'>确认</button>
				</div>
				<div className='white' style={{display:this.state.alert?"block":"none"}}></div>
					
				<Route path='/set/editpwd' component={Editpwd}></Route>
				<Route path='/set/address' component={Address}></Route>
				<Route path='/set/ticket' component={Ticket}></Route>
			</div>
		)
	}
	handleOut(){
		this.setState({
			alert:true
		})
	}
	sure(e){
		if (e.target.className==='yes') {
			localStorage.removeItem('cake_user');
			// this.props.history.replace('/cake');
			window.location.hash='/cake';
		}else if(e.target.className==='no'){
			this.setState({
				alert:false
			})
		}
	}
	goChild(){
		this.setState({
			edit:true
		})
	}
} 
export default Set