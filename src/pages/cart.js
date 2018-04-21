import React, { Component } from 'react';
import './cart.scss';

import shopping from '../img/hint.png';
import go from '../img/stroll.png';
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
					<img src={shopping} />
					<Link to='/cake'><img src={go} /></Link>
				</div>
				<div className='cart_main' style={{"display":this.state.hasCart?"block":"none"}}>
					
				</div>
			</div>
		)
	}
}

export default Cart