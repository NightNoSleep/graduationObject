import React,{ Component } from "react";
import axios from 'axios';
import "./address.scss";

import IncAddress from './incAddress';
class AddressLi extends Component {
	constructor(){
		super();
		this.del = this.del.bind(this);
		this.changeMoren = this.changeMoren.bind(this);
	}
	render(){
		let {username,phone,province,city,county,address,moren,_id} = this.props.address;
		return(
			<div className='address' onClick={this.changeMoren} id={moren===true?"currAddress":""}>
				<i className='iconfont icon-quangou' style={{visibility:moren===true?"visible":"hidden"}}></i>
				<div>
					<p><span>{username}</span>&nbsp;&nbsp;<span>{phone}</span></p>
					<p><span style={{display:moren===true?"inline-block":"none"}}>[默认]&nbsp;</span>{province}{city}{county}{address}</p>
				</div>
				<i className='iconfont icon-shanchu' data-id={_id} onClick={this.del}></i>
			</div>
		)
	}
	del(e){
		this.props.ondel(e.target.dataset.id)
	}
	changeMoren(e){
		if (e.target.className==='iconfont icon-shanchu') 
			return
		this.props.onchange(this.props.address)
	}
}
class Address extends Component {
	constructor(){
		super();
		this.state = {
			incAddress:false,
			addresses:[],
			obj:""
		}
		this.goInc = this.goInc.bind(this);
		this.delAddress = this.delAddress.bind(this);
		this.addAddress = this.addAddress.bind(this);
		this.change = this.change.bind(this);
	}
	render(){
		let lists = this.state.addresses.map((item,index)=>{
			return <AddressLi key={index} onchange={this.change} ondel={this.delAddress} address={item}></AddressLi>
		})
		return(
			<div className="setAddress">
				<div style={{display:this.state.incAddress?"none":"block"}}>
					{lists}
					<a onClick={this.goInc} className='addAddress'>添加新的地址</a>
				</div> 
				<div style={{display:this.state.incAddress?"block":"none"}}>
					<IncAddress onshow={()=>{this.show()}} item={this.state.obj} onadd={this.addAddress}></IncAddress>
				</div>
			</div>
		)
	}
	componentDidMount(){
		axios.post('/api/getAddress',{userphone:JSON.parse(localStorage.getItem('cake_user'))}).then((res)=>{
			var addresses = res.data.address;
			this.setState({
				addresses:addresses
			})
		})
	}
	goInc(){
		this.setState({
			incAddress:true,
			obj:""
		})
	}
	show(val){
		if(val ==="false")
			val=false
		this.setState({
			incAddress:val
		})
	}
	delAddress(val){
		axios.post("/api/delAddress",{_id:val}).then((res)=>{
			let ars = this.state.addresses;
			for(var i in ars){
				if (ars[i]._id==val) {
					ars.splice(i,1);
				}
			}
			this.setState({
				addresses:ars
			})
		})
	}
	addAddress(ars,idx){
		var arr = this.state.addresses;
		if (ars.moren===true) {
			for(var i in arr){
				if (arr[i].moren===true)
					arr[i].moren=false;
			}
		}
		if (idx===0) {
			this.setState({
				addresses:[...arr,ars]
			})
		}else if(idx===1){
			var index = this.findId(arr,ars._id);
			arr.splice(index,1,ars);
			this.setState({
				addresses:arr
			})
		}
	}
	change(obj){
		this.setState({
			incAddress:true,
			obj:obj
		})
	}
	findId(arr,id){
		for(var i in arr){
			if (arr[i]._id==id) {
				return i;
			}
		}
		return -1;
	}
	
}
export default Address