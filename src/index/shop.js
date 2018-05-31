import React,{ Component } from 'react';
class Shop extends Component {
	constructor(){
		super();
		this.chooseShop = this.chooseShop.bind(this);
	}
	render(){
		let {img,title,type,price,_id} = this.props.shop;
		return(
			<dl className="lists_shop">
				<dt><img src={img} alt="" /></dt>
				<dd>
					<p className='title'>{title}</p>
					<p className='type'>{type}</p>
					<p className='money'><i className='iconfont icon-renminbi'>{price}</i><span>/1.5磅</span></p>
					<button className="getCart" data-id={_id} data-price={price} onClick={this.chooseShop}></button>
				</dd>
			</dl>
		)
	}
	chooseShop(e){
		this.props.onchoose(e.target.dataset.id,e.target.dataset.price)
	}
}

export default Shop;