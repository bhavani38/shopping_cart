import React, { Component } from 'react';
import util from '../util';

export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
             {cartItems.length === 0? "Your cart is empty": <div className="item_alert"> You have {cartItems.length} items in the basket</div>}   
             {cartItems.length>0 && 
                <div><br/>
                <table className="table table-responsive">
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th></th>
                    </tr>
                    {cartItems.map(Item =>
                            <tr>
                                <td>{Item.title}</td>
                                <td>{Item.count}</td>
                                <td>{util.formatCurrency(Item.price * Item.count)}</td>
                                <td><button className="btn-danger" onClick={ (e) => this.props.handleRemoveFromCart(e, Item)}>x</button></td>
                                
                                </tr>
                        )}   
                       <tr>
                           <th>Total: </th>
                           <th> &nbsp;</th>
                           <th>{util.formatCurrency(cartItems.reduce( (a,c) => a+c.price*c.count, 0))}</th>
                           <th></th>
                           </tr>  
                </table>
                   
                   <button className="btn btn-primary" onClick={() => alert('Checkout....')}>Check out</button>
                </div>
             }
            
            </div>
        )
    }
}
