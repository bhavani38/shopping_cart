import React, { Component } from 'react';
import util from '../util';

export default class Products extends Component {
    render() {
        const productItems = this.props.products.map( product =>           
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center" style={{backgroundColor: "rgba(0,0,0,0)"}}>
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e,product)}>
                        <img src={`products/${product.sku}.jpg`} alt={product.title} style={{width: "200px",height:"250px"}}/>
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <b>  {util.formatCurrency(product.price)} </b><br/>
                    <button className="btn btn-warning" onClick={(e) => this.props.handleAddToCart(e,product)}>Add to cart</button>
                </div>
            </div>
        )        
        return (
            <div className="row">
              {productItems}  
            </div>
        )
    }
}
