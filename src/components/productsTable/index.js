import React, { Component } from 'react';
import './index.css';
import CheckoutTableItem from '../checkoutTableItem';



class ProductsTable extends Component {


  render() {
    return(
      <div className="row ProductsTable">
        <div className="col-md-12">
          <table id="products" className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Add Product</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.products &&
                  this.props.products.map( item =>
                    <CheckoutTableItem
                      item={item}
                      key={item.id}
                      addItem={this.props.addItem}
                      word = 'Add'
                    />
                  )
              }

            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default ProductsTable;
