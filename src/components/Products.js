import React, { Component } from 'react';
import util from '../util';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import { addToCart} from '../actions/cartActions';

class Products extends Component {
  componentWillMount() {
      this.props.fetchProducts()
  }
    render() {
        const productItems = this.props.products.map( product =>           
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center" style={{backgroundColor: "rgba(0,0,0,0)"}}>
                    <a href={`#${product.id}`} onClick={() => this.props.addToCart(this.props.cartItems,product)}>
                        <img src={`products/${product.sku}.jpg`} alt={product.title} style={{width: "150px",height:"200px"}}/>
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <b>  {util.formatCurrency(product.price)} </b><br/>
                    <button className="btn btn-warning" onClick={() => this.props.addToCart(this.props.cartItems,product)}>Add to cart</button>
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

const mapStateToProps = state => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items

});
export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);