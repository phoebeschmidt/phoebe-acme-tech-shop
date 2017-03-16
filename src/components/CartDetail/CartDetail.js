import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { getCurrencyWithAmount } from '../../utils/getCurrency';
import { mapStateToProps } from '../../utils/reduxHelper';
import { sumCartItems } from '../../utils/sumCartItems';
class CartDetail extends Component {
  render() {
    let totalItems = 0;
    const cartItems = this.props.cart.lines.map((item) => {
      totalItems += item.quantity;
      return <CartItem data={item} key={item.sku}></CartItem>
    });
    return (
      <div className="CartDetail">
        <h1>Your Cart</h1>
        {cartItems}
        <h2>Quantity: {sumCartItems(this.props.cart.lines)} Total: {getCurrencyWithAmount(this.props.cart.total)}</h2>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CartDetail);
