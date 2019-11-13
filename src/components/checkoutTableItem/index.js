import React from 'react';
import './index.css';

function CheckoutTableItem(props) {
  return(
    <tr>
      <td>{props.item.name}</td>
      <td>${props.item.price}</td>
      <td>
        {
          (props.word === 'Add') ?
            <button
              className="btn btn-success"
              onClick={() => props.addItem(props.item.id)}
            >
              Add
            </button>
            :
            <button
              className="btn btn-danger"
              onClick={() => alert(props.item.id)}
            >
              Remove
            </button>
        }


      </td>
    </tr>
  )
}



export default CheckoutTableItem;
