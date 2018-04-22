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

class Shop extends Component {
	constructor(){
		super();
	}
	render(){
		let {img,title,type,price} = this.props.shop;
		return(
			<dl className="lists_shop">
				<dt><img src={img} alt="" /></dt>
				<dd>
					<p className='title'>{title}</p>
					<p className='type'>{type}</p>
					<p className='money'><i className='iconfont icon-renminbi'>{price}</i><span>/1.5磅</span></p>
					<button className="getCart"></button>
				</dd>
			</dl>
		)
	}
}

class Cake extends Component{
	constructor(){
		super();
		this.state = {
			type:false,
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
			}]
		}
	}
	render(){
		let lists = this.state.lists.map(function(shop,idx){
			return <Shop shop={shop} key={idx}></Shop>
		})
		return(
			<div className="cake_index">
				<div className="index_header">
					<i className='iconfont icon-dingwei'></i>
					<button className="address">成都市</button>
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
					<span className='curr all'>全部</span>
					<span className='type'>拿破仑系列<i className='iconfont icon-delete' style={{"display":this.state.type?"block":"none"}}></i></span>
					<p>
						<i className='iconfont icon-loudoushaixuan'></i>
						筛选
					</p>
				</div>
				<div className="lists">
					{lists}
				</div>
			</div>
		)
	}
}

export default Cake