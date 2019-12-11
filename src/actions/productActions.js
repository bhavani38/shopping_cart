import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, FILTER_PRODUCTS_BY_PRICE } from "./types";
import axios from 'axios';
export const fetchProducts = () => (dispatch) => {
    axios.get('https://myblog-9cad3.firebaseio.com/db.json').then(response => {
        return dispatch({ type: FETCH_PRODUCTS, payload: response.data.products });
    })  
}

export const filteredProducts = (products, size) => (dispatch) => {
  return dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
          size: size,
          sort: '',          
          items: size===''? products: products.filter(a => a.availableSizes.indexOf(size)>=0)
      }
  })
}

export const sortProducts = (items, sort) => (dispatch) => {
   const products = items.slice();
    if(sort!=='') {       
        products.sort((a,b) => 
          (          
            sort === 'lowest'? (a.price > b.price?1:-1) : (a.price < b.price?1:-1)            
        ));
      }
      else {        
        products.sort((a,b) => (a.id > b.id ?1:-1));
      } 

    return dispatch({
        type: FILTER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: products
        }
    })
  }