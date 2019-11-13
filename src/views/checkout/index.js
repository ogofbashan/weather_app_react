import React, { Component } from 'react';
import './index.css';
import ProductsTable from '../../components/productsTable';

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
  }

  componentDidMount() {
    this.setState({ products });
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
    }

    removeItem = id => {
      console.log(id);
    }
  render() {
    console.log(this.state.cart);
    return(
      <div className="Checkout">
        <ProductsTable products={this.state.products} addItem={this.addItem}/>
      </div>
    );
  }
}
export default Checkout;
