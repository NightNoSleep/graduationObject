import React,{ Component } from 'react';

class Type extends Component{
	constructor(){
		super();
		this.getType = this.getType.bind(this);
	}
	render(){
		let {type,idx} = this.props;
		return(
			<li onClick={this.getType} className='type_li' key={idx}>
				{type}
			</li>
		)
	}
	getType(e){
		this.props.ontype(e.target.innerText);
		var old = document.querySelector('.curr_type');
		if (old != null)
			old.className='type_li';
		e.target.className='curr_type';
	}
}
export default Type