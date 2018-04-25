import React,{ Component } from 'react';
import './m1child.scss';
class M1child extends Component{
	render(){
		return(
			<div className='m1child_detail'>
				<p className='nothing'>
					亲！你还没有订单哦 O(∩_∩)O;
				</p>
			</div>
		)
	}
} 
export default M1child