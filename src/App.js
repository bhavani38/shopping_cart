import React, { Component } from 'react';
import { Provider }   from 'react-redux';   
import './App.css';

import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import store from './store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [] };    
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentDidMount () {       
    if(localStorage.getItem('cartItems')) {
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }
  }

 

  handleAddToCart(e,product) {
    this.setState(
      state => {
        const cartItems = state.cartItems;
        let productAlreadyInCart = false;
        cartItems.forEach(item => {
          if(item.id === product.id) {
            productAlreadyInCart = true;
            item.count++;
          }          
        });
        if(!productAlreadyInCart) {
          cartItems.push({...product,count: 1});
        }        
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
        return cartItems;
      }
    )
  }

  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
      return {cartItems};
    });
  }

  
  render() {    
    return (
      <Provider store={store}>
      <div className="container">
       <h1>Shopping Cart</h1>
       <hr/>
       <div className="row">
         <div className="col-md-8">
           <Filter size={this.state.size} sort= {this.state.sort} 
           handleChangeSize= {this.handleChangeSize}
           handleChangeSort= {this.handleChangeSort}
           count= {this.state.filteredProducts.length}
           />
           <hr/>
          <Products products= {this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
         </div>
         <div className="col-md-4">
           <Basket cartItems={this.state.cartItems} handleRemoveFromCart ={this.handleRemoveFromCart}/>         
         </div>
       </div>
      </div>
      </Provider>
    );
  }
}

export default App;
