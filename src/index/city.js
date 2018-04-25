import React,{ Component } from 'react';

class City extends Component{
	constructor(){
		super();
		this.handleCity = this.handleCity.bind(this);
	}
	render(){
		let { city,idx } = this.props;
		return(
			<li className='add_li' key={idx} onClick={this.handleCity}>
				{city}
			</li>
		)
	}
	handleCity(e){
		this.props.onchange(e.target.innerText);
		var old = document.querySelector('.curr_li');
		if (old != null)
			old.className='add_li';
		e.target.className='curr_li';
	}
}
export default City