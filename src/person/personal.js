import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import head from '../img/timg.jpg';
import '../font/iconfont.css';
import './personal.scss';

class List extends Component{
	render(){
		let {cN,type,more,url} = this.props.link;
		return(
			<Link to={url}>
				<span className='i_nav'>
					<i className={'iconfont '+cN}></i>
				</span>
				<p>{type}</p>
				<span className='detail'>
					{more}
					<i className='iconfont icon-iconfonticonfonti2copycopy'></i>
				</span>
			</Link>
		)
	}
}
class Personal extends Component{
	constructor(){
		super();
		this.state = {
			phone : 15283769527,
			score : 1000,
			lists:[{
				url:'/login',
					cN:'icon-dingdan',
					type:'全部订单',
					more:'查看全部已购商品'
				},{
					url:'/login',
					cN:'icon-youhuiquan',
					type:'我的优惠券',
					more:''
				},{
					url:'/login',
					cN:'icon-star',
					type:'我的喜欢',
					more:''
				},{
					url:'/login',
					cN:'icon-tubiaolunkuo-1',
					type:'我的积分',
					more:''
				},{
					url:'/login',
					cN:'icon-liwu',
					type:'兑换专区',
					more:'积分商城'
				},{
					url:'/login',
					cN:'icon-shezhi',
					type:'设置',
					more:'修改密码、设置发货地址和发票'
				}]
		}
	}
	render(){
		let lists = this.state.lists.map(function(link,index){
			return <List link={link} key={index}></List>
		})
		return(
			<div className='cake_personal'>
				<div className='personal_header'>
					<img  src={head} alt=""/>
					<ul>
						<li><i className="iconfont icon-fl-renyuan"></i> {this.state.phone}</li>
						<li><i className="iconfont icon-tubiaolunkuo-1"></i> {this.state.score}</li>
					</ul>
					<i className='goPerson iconfont icon-iconfonticonfonti2copycopy'></i>
				</div>
				<div className='personal_nav'>
					<div><a href=""><i className='iconfont icon-qianbao'></i><span>待支付</span></a></div>
					<div><a href=""><i className='iconfont icon-fahuo'></i><span>待发货</span></a></div>
					<div><a href=""><i className='iconfont icon-tubiaolunkuo-'></i><span>待收货</span></a></div>
					<div><a href=""><i className='iconfont icon-pinglun'></i><span>待评价</span></a></div>
				</div>
				<div className="list">
						{lists}
				</div>
			</div>
		)
	}
}
export default Personal