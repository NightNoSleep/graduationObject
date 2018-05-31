import React, { Component } from 'react';
import './cart.scss';

import { Link } from 'react-router-dom';

class Cart extends Component{
	constructor(){
		super();
		this.state={
			hasCart : false
		}
	}

	render(){

		return(
			<div className='cake_cart'>
				<div className='nothing' style={{"display":this.state.hasCart?"none":"block"}}>
					<img src="./img/hint.png" alt=''/>
					<Link to='/cake'><img src="./img/stroll.png" alt=''/></Link>
				</div>
				<div className='cart_main' style={{"display":this.state.hasCart?"block":"none"}}>
					
				</div>
			</div>
		)
	}
}

export default Cart