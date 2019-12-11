import React, { Component } from 'react'
import { connect } from 'react-redux';
import {filteredProducts, sortProducts} from '../actions/productActions';

class Filter extends Component {
    render() {      
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.filteredItems.length} products found.
                </div>
                <div className="col-md-4">
                    <label>
                        Order by                         
                        <select className="form-control" value={this.props.sort}
                        onChange={ (e) => this.props.sortProducts(this.props.filteredItems, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                <label>
                        Filter size
                        <select className="form-control" value={this.props.size}
                        onChange={ (e) => this.props.filteredProducts(this.props.products, e.target.value)}>
                            <option value="">All</option>
                            <option value="X">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products.items,
    filteredItems: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort
})
export default connect(mapStateToProps, {filteredProducts, sortProducts})(Filter);
