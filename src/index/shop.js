import React,{ Component } from 'react';
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

export default Shop;