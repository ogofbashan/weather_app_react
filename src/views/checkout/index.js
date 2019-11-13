import React, { Component } from 'react';
import './index.css';
import ProductsTable from '../../components/productsTable';
import CartTable from '../../components/cartTable';
import firebase from '../../firebase';

let products = [
  {
    'id' : 101,
    'name' : 'Hat',
    'price' : 29.95,
  },
  {
    'id' : 102,
    'name' : 'Shirt',
    'price' : 19.99,
  }
]

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      products : [],
      cart : [],
    }

    // run once for the life of this app --run to update products
    // firebase.database().ref('products').set(products);
  }

  componentDidMount() {
    this.setState({ products });

    // add firebase cart info to state cart
    const DB = firebase.database().ref('cart');

    // loop through the database response
    DB.on('value', response =>{
      let data = response.val();

      let cart = [];

      for (let i in data) {
        cart.push(data[i]);
      }

      this.setState({ cart});
    });
  }

  addItem = id => {
    let cart = this.state.cart;
    let products = this.state.products;

    for (let i in products) {
      if(products[i].id === id) {
        cart.push(products[i]);
        break;
      }
    }
    this.setState({ cart });

    // add the item to firebase into the cart reference
    firebase.database().ref('cart').set(cart);
  }

  removeItem = id => {
    let cart = this.state.cart;

    for (let i in cart) {
      if (cart[i].id === id) {
        cart.splice(i, 1);
        break;
      }
    }
    this.setState({ cart });

    // remove the item to firebase into the cart reference
    firebase.database().ref('cart').set(cart);
  }

  render() {
    return(
      <div className="Checkout">
        <ProductsTable products={this.state.products} addItem={this.addItem}/>
        <CartTable cart={this.state.cart} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default Checkout;
