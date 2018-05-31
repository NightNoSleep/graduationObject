import React, { Component } from 'react';
import './cake.scss';
import '../font/iconfont.css';
import axios from "axios";

import {
	Link
} from 'react-router-dom';
//导入组件
import Shop from './shop';
import City from './city';
import Type from './type';
class Cake extends Component{
	constructor(){
		super();
		this.state = {
			isLogin:localStorage.getItem('cake_user')?true:false,
			type:false,
			address:'成都市',
			lists:[],
			cities:['上海市','福州市','苏州市','厦门市','无锡市','南京市','杭州市','宁波市','青岛市','北京市','成都市','重庆市','扬州市','镇江市'],
			leave:true,
			types:['芝士系列','巧克力系列','拿破仑系列','慕斯系列','乳脂系列','选拼系列','定制蛋糕','翻糖定制','星座系列','阿狸系列'],
			cake_types:true,
			series:'',
			amount:1,
			price:0,
			alert:false,
			monry:0,
			_id:"",
			weight:"1.5磅",
			chooseAmount:false,
			num:0
		}
		this.handleAddress = this.handleAddress.bind(this);
		this.over = this.over.bind(this);
		this.getAddress = this.getAddress.bind(this);
		this.getType = this.getType.bind(this);
		this.out = this.out.bind(this);
		this.handleType = this.handleType.bind(this);
		this.handleChangeType = this.handleChangeType.bind(this);
		this.handleDel = this.handleDel.bind(this);
		this.chooseShop = this.chooseShop.bind(this);
		this.handleCart = this.handleCart.bind(this);
		this.handleBuy = this.handleBuy.bind(this);
		this.handleAmount = this.handleAmount.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.changeWeight = this.changeWeight.bind(this);
		this.inc = this.inc.bind(this);
		this.rec = this.rec.bind(this);
	}
	render(){
		var _this = this;
		let lists = this.state.lists.map(function(shop,idx){
			return <Shop shop={shop} onchoose={_this.chooseShop} key={idx}></Shop>
		})
		let cities = this.state.cities.map(function(city,idx){
			return <City onchange={_this.getAddress} city={city} key={idx}></City>
		})
		let types = this.state.types.map(function(type,idx){
			return <Type ontype={_this.getType} type={type} key={idx}>{type}</Type>
		})
		return(
			<div className="cake_index">
				<div className="index_header">
					<i className='iconfont icon-dingwei'></i>
					<button onClick={this.handleAddress} className="address">{this.state.address}</button>
					<i className='iconfont icon-xiajiantou'></i>
				</div>
				<div className="banner">
					<div><img src="./img/top1.jpg" alt="" /></div>
					<div><img src="./img/top2.jpg" alt="" /></div>
					<div><img src="./img/top3.jpg" alt="" /></div>
				</div>
				<div className='index_nav'>
					<Link to='/login'><img src="./img/icon1.png" alt=""/><span>特惠商城</span></Link>
					<Link to='/login'><img src="./img/icon2.png" alt=""/><span>INBOX</span></Link>
					<Link to='/login'><img src="./img/icon3.png" alt=""/><span>人气排行</span></Link>
					<Link to='/login'><img src="./img/icon4.png" alt=""/><span>下午茶</span></Link>
					<Link to='/login'><img src="./img/icon5.png" alt=""/><span>卡券兑换</span></Link>
				</div>
				<div className='types'>
					<span  id="all" className='curr all' onClick={this.handleChangeType}>全部</span>
					<span id="type" className='type' onClick={this.handleChangeType} style={{display:this.state.series!=''?'block':'none'}}>{this.state.series}<i onClick={this.handleDel} className='iconfont icon-delete' style={{"display":this.state.type?"block":"none"}}></i></span>
					<p onClick={this.handleType}>
						<i className='iconfont icon-loudoushaixuan'></i>
						筛选
					</p>
				</div> 
				<div className="lists">
					{lists}
				</div>
				<div className='address' style={{display:this.state.leave?'none':'block'}}>
					<div className='black' onClick={this.over}></div>
					<div className='many_address'>
						<h5>请选择配送城市</h5>
						<div className='now_city'>您当前所在城市：<span>{this.state.address}</span>
						</div >
						<ul className='cities' onClick={this.over}>
							{cities}
						</ul>
					</div>
				</div>
				<div className='cake_types' style={{display:this.state.cake_types?'none':'block'}}>
					<div className='black' onClick={this.out}></div>
					<div className='many_types'>
						<h5>商品</h5>
						<span>全部</span>
						<ul className='cities' onClick={this.out}>
							<h5>口味</h5>
							{types}
						</ul>
					</div>
				</div>

			{/*选择商品数量*/}
				<div className='chooseShop' style={{display:this.state.chooseAmount?"block":"none"}}>
					<div className='back'></div>
					<div className='content'>
						<div className='ch_head'>
							<button>常规款</button>
							<span onClick={this.handleClose}></span>
						</div>
						<div className='weight' onClick={this.changeWeight}>
							<button className='currBtn'>1.5磅</button>
							<button>2.5磅</button>
							<button>3.5磅</button>
							<button>5.5磅</button>
						</div>
						<div className='detail'>
							<ul>
								<li>14CM*14CM*5CM≈6寸,640g</li>
								<li>免费赠送5份餐具</li>
								<li>4-5人食用</li>
							</ul>
						</div>
						<div className='shop_amount'>
							<span>数量</span>
							<i className='iconfont icon-jianhao' onClick={this.rec}></i>
							<input type="number" value={this.state.amount} onChange={this.handleAmount}/>
							<input type="text" value={String(Number(this.state.amount)*this.state.money)} readOnly/>
							<i className='iconfont icon-jia' onClick={this.inc}></i>
						</div>
						<div className='btns'>
							<button onClick={this.handleCart}>加入购物车</button>
							<button onClick={this.handleBuy} data-id={this.state._id}>立即购买</button>
						</div>
						<div className='cart_alert' style={{display:this.state.alert?"block":"none"}}>{this.state.isLogin?"购买成功":"您未登录，请先登录"}</div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.getAllShop(this.state.num)
	}
	handleAddress(e){
		this.setState({
			leave:false
		})
	}
	over(e){
		this.setState({
			leave:true
		});
	}
	out(e){
		this.setState({
			cake_types:true
		})
	}
	getAddress(val){
		this.setState({
			address:val
		})
	}
	getType(val){
		this.setState({
			series:val,
			type:true
		})
		document.querySelector('.curr').className='';
		document.querySelector('#type').className='type curr';
		this.getSeriesShop(val);
	}
	handleType(){
		this.setState({
			cake_types:false
		})
	}
	handleChangeType(e){
		document.querySelector('.curr').className='';
		e.currentTarget.className='curr';
		if (e.target.innerText!='全部') {
			this.setState({
				type:true
			})
			this.getSeriesShop(e.target.innerText);
		}else{
			this.setState({
				type:false
			})
			this.getAllShop();
		}
	}
	handleDel(){
		this.setState({
			series:''
		})
		this.getAllShop();
	}
	getAllShop(num){
		var num =num||0;
		axios.post("/api/getShop",{num:num}).then((res)=>{
			console.log(res)
			this.setState({
				lists:res.data.list
			})
		})
	}
	getSeriesShop(series){
		axios.post("/api/getSeries",{series:series}).then((res)=>{
			this.setState({
				lists:res.data.list
			})
		})
	}
	chooseShop(id,price){
		this.setState({
			price:Number(price),
			money:Number(price),
			_id:id,
			chooseAmount:true
		})
	}
	handleAmount(e){
		this.setState({
			amount:e.target.value
		})
	}
	inc(){
		this.setState({
			amount:++this.state.amount
		})
	}
	rec(){
		if (this.state.amount>1) {
			this.setState({
				amount:--this.state.amount
			})
		}
	}
	handleCart(e){
		this.setState({
			alert:true
		})
		setTimeout(()=>{
			this.setState({
				alert:false
			})
			this.handleClose()
		},800)
	}
	handleBuy(e){
		this.props.history.push('/cart',{_id:e.target.dataset.id,amount:this.state.amount,money:this.state.monsy})
	}
	handleClose(){
		this.setState({
			chooseAmount:false,
			_id:"",
			price:0,
			weight:"1.5磅",
			money:0
		})
	}
	changeWeight(e){
		document.querySelector('.currBtn').className="",
		e.target.className="currBtn";
		var price = this.state.price;
		switch(parseFloat(e.target.innerText)){
			case 1.5:
				price = price;
				break;
			case 2.5:
				price = parseInt(1.4*price);
				break;
			case 3.5:
				price = parseInt(2.5*price);
				break;
			case 5.5:
				price = parseInt(3.5*price);
				break;
			default:
				break;
		}
		this.setState({
			weight:e.target.innerText,
			money:price
		})
	}
}

export default Cake