import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import head from '../img/timg.jpg';
import '../font/iconfont.css';
import './personal.scss';

class Personal extends Component{
	constructor(){
		super();
		this.state = {
			phone : 15283769527,
			score : 1000
		}
	}
	render(){
		return(
			<div className='cake_personal'>
				<div className='personal_header'>
					<img  src={head} />
					<ul>
						<li><i className="iconfont icon-fl-renyuan"></i> {this.state.phone}</li>
						<li><i className="iconfont icon-tubiaolunkuo-1"></i> {this.state.score}</li>
					</ul>
					<i className='goPerson iconfont icon-iconfonticonfonti2copycopy'><a href=""></a></i>
				</div>
			</div>
		)
	}
}
export default Personal