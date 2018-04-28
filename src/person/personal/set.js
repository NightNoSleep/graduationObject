import React,{ Component } from 'react';
import './set.scss';

import {
	Link
} from 'react-router-dom';
class Set extends Component{
	render(){
		return(
			<div className='set_main set-title'>
				<a>修改密码<i className='iconfont icon-iconfonticonfonti2copycopy'></i></a>
				<a>收货地址<i className='iconfont icon-iconfonticonfonti2copycopy'></i></a>
				<a>发票管理<i className='iconfont icon-iconfonticonfonti2copycopy'></i></a>
				<p>退出当前账号</p>
			</div>
		)
	}
} 
export default Set