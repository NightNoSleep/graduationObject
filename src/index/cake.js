import React, { Component } from 'react';
import './cake.scss';
import '../font/iconfont.css';

import img1 from '../img/top1.jpg';
import img2 from '../img/top2.jpg';
import img3 from '../img/top3.jpg';

import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';

import demo from '../img/list/demo.jpg';

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
			type:false,
			address:'成都市',
			lists:[{
				img:demo,
				title:'芒果拿破仑',
				type:'Blueberry Napoleon',
				price:'198'
			},{
				img:demo,
				title:'芒果拿破仑',
				type:'Blueberry Napoleon',
				price:'198'
			},{
				img:demo,
				title:'芒果拿破仑',
				type:'Blueberry Napoleon',
				price:'198'
			}],
			cities:['上海市','福州市','苏州市','厦门市','无锡市','南京市','杭州市','宁波市','青岛市','北京市','成都市','重庆市','扬州市','镇江市'],
			leave:true,
			types:['芝士系列','巧克力系列','拿破仑系列','慕斯系列','乳脂系列','选拼系列','定制蛋糕','翻糖定制','星座系列','阿狸系列'],
			cake_types:true,
			taste:''

		}
		this.handleAddress = this.handleAddress.bind(this);
		this.over = this.over.bind(this);
		this.getAddress = this.getAddress.bind(this);
		this.getType = this.getType.bind(this);
		this.out = this.out.bind(this);
		this.handleType = this.handleType.bind(this);
		this.handleChangeType = this.handleChangeType.bind(this);
	}
	render(){
		var _this = this;
		let lists = this.state.lists.map(function(shop,idx){
			return <Shop shop={shop} key={idx}></Shop>
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
					<div><img src={img1} alt="" /></div>
					<div><img src={img2} alt="" /></div>
					<div><img src={img3} alt="" /></div>
				</div>
				<div className='index_nav'>
					<Link to='/login'><img src={icon1} alt=""/><span>特惠商城</span></Link>
					<Link to='/login'><img src={icon2} alt=""/><span>INBOX</span></Link>
					<Link to='/login'><img src={icon3} alt=""/><span>人气排行</span></Link>
					<Link to='/login'><img src={icon4} alt=""/><span>下午茶</span></Link>
					<Link to='/login'><img src={icon5} alt=""/><span>卡券兑换</span></Link>
				</div>
				<div className='types'>
					<span className='curr all' onClick={this.handleChangeType}>全部</span>
					<span className='type' onClick={this.handleChangeType} style={{display:this.state.taste!=''?'block':'none'}}>{this.state.taste}<i className='iconfont icon-delete' style={{"display":this.state.type?"block":"none"}}></i></span>
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
			</div>
		)
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
			taste:val
		})
	}
	handleType(){
		this.setState({
			cake_types:false
		})
	}
	handleChangeType(e){
		document.querySelector('.curr').className='';
		e.target.className='curr';
		if (e.target.innerText!='全部') {
			this.setState({
				type:true
			})
		}else{
			this.setState({
				type:false
			})
		}
	}
}

export default Cake