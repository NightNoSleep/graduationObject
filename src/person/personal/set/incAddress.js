import React,{ Component } from 'react';
import './incAddress.scss';
import axios from 'axios';

class IncAddress extends Component {
	constructor(){
		super();
		this.state = {
			moren:false,
			username:'',
			userphone:JSON.parse(localStorage.getItem('cake_user')),
			phone:"",
			province:"",
			city:"",
			county:"",
			address:"",
			alert:" ",
			show:false,
			_id:null
		}
		this.changeMoren = this.changeMoren.bind(this);
		this.submit_address = this.submit_address.bind(this);
		this.username = this.username.bind(this);
		this.province = this.province.bind(this);
		this.city = this.city.bind(this);
		this.county = this.county.bind(this);
		this.address = this.address.bind(this);
		this.getPhone = this.getPhone.bind(this);
	}
	render(){
		return(
			<div className='incAddress'>
				<div className='write'>
					<div className='same_input'>
						<span>收货人</span>
						<input type="text" placeholder="您的姓名" value={this.state.username} onChange={this.username}/>
					</div>
					<div className='same_input'>
						<span>移动电话</span>
						<input type="number" value={this.state.phone} onChange={(e)=>{this.phone(e)}} onBlur={this.getPhone}/>
					</div>
					
					<div className='set_city'>
						<input type="text" placeholder='省份' value={this.state.province} onChange={this.province}/>
						<input type="text" placeholder='城市' value={this.state.city} onChange={this.city}/>
						<input type="text" placeholder='区县' value={this.state.county} onChange={this.county}/>
					</div>
					<div className='same_input'>
						<span>详细地址</span>
						<input type="text" value={this.state.address} onChange={this.address}/>
					</div>
					<div className='same_input' style={{visibility:this.state.show?"visible":"hidden"}}>
						<input type="text" readOnly value={this.state.alert} style={{"textAlign":"center","width":"100%","marginRight":"0"}}/>
					</div>
				</div>

				<div className='moren'><span>设为默认地址</span><i id='moren' className='iconfont icon-quan' style={{display:this.state.moren?"none":"block"}} onClick={this.changeMoren}></i><i className='iconfont icon-quangou zhong' style={{display:this.state.moren?"block":"none"}} onClick={this.changeMoren}></i></div>
				<button className='submit_address' onClick={this.submit_address}>提交</button>
			</div>
		)
	}
	componentWillReceiveProps(nextProps){
		let item = nextProps.item;
		if (item) {
			this.setState({
				username:item.username,
				phone:item.phone,
				province:item.province,
				city:item.city,
				county:item.county,
				address:item.address,
				_id:item._id,
				moren:item.moren
			})
		}
		
	}
	changeMoren(e){
		if(e.target.id=="moren"){
			this.setState({
				moren:true
			})
		}else{
			this.setState({
				moren:false
			})
		}
	}
	submit_address(){
		let obj = this.state;
		var result = ()=>{
			for(var i of obj){
				if (i==="") 
					return false
			}
		}
		if (!result) {
			this.setState({
				show:true,
				alert:"请填写完整"
			})
		}else{
			if (this.state._id===null) {
				axios.post('/api/addAddress',this.state).then((res)=>{
					if (res.data.code===0) {
						this.props.onadd(this.state,0)
						this.props.onshow("false")
						this.setState({
							username:"",
							phone:"",
							province:"",
							city:"",
							county:"",
							address:"",
							_id:null,
							moren:false
						})
					}
				})
			}else{
				axios.post('/api/addAddress',this.state).then((res)=>{
					if (res.data.code===0) {
						this.props.onadd(this.state,1)
						this.props.onshow("false")
						this.setState({
							username:"",
							phone:"",
							province:"",
							city:"",
							county:"",
							address:"",
							_id:null,
							moren:false
						})
						
					}
				})
			}
		}
	}
	username(e){
		this.setState({
			username:e.target.value.trim()
		})	
	}
	phone(e){
		//本来就是空着的
		this.setState({
			phone:e.target.value.trim()
		})
	}
	getPhone(e){
		var reg = /^1[3|4|5|8][0-9]\d{4,8}$/g;
		if (reg.test(e.target.value)) {
			this.setState({
				phone:e.target.value.trim(),
				alert:""
			})	
		}else{
			this.setState({
				show:true,
				alert:"请输入正确的手机号"
			})
		}
	}
	province(e){
		this.setState({
			province:e.target.value.trim()
		})	
	}
	city(e){
		this.setState({
			city:e.target.value.trim()
		})	
	}
	county(e){
		this.setState({
			county:e.target.value.trim()
		})	
	}
	address(e){
		this.setState({
			address:e.target.value.trim()
		})	
	}
}
export default IncAddress