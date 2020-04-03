import React from 'react';
import '../style/item.css';
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
      return (
        <li className="item">
          <h5 className="quantity">{this.props.quantity}</h5>
          <div>
            <h5>{this.props.name}</h5>
            <h6 className="text-muted">{this.props.description}</h6>
          </div>
          <div className="badge badge-info">{this.props.category}</div>
          <h5 className="price">{this.props.price}€</h5>
        </li>
      );
    }
  }


Item.defaultProps = {
  quantity: 'No hay descripción',
  price: PropTypes.number.isRequired,
}

export default Item;