import React ,{ Component } from 'react';
import './quickLogin.scss';
import header from '../img/login_header.jpg';
import '../font/iconfont.css';
import { Link } from 'react-router-dom';
class QuickLogin extends Component{
	render(){
		return(
			<div className='cake_quickLogin'>
				<div className="quickLogin_header">
					<img src={header} alt=''/>
				</div>
				<div className="quickLogin_main">
					<input className='phone' type="text" placeholder='请输入您的手机号'/>
					<div className='moveGetCode'>
						<div className="content">向右滑动获取动态验证码</div>
						<div className="move">
							<i className="iconfont icon-iconfonticonfonti2copycopy"></i>
							<i className="iconfont icon-iconfonticonfonti2copycopy"></i>
						</div>
					</div>
					<input className='phoneCode' type="text" placeholder='请输入动态验证码'/>
					<input className='quickLogin_submit' type="submit" value="登陆" />
					<p><Link to='/login'>账号密码登陆></Link></p>
				</div>
			</div>
		)
	}
}
export default QuickLogin