import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencyWithAmount } from '../../utils/getCurrency';
import { mapStateToProps, mapDispatchToProps } from '../../utils/reduxHelper';
class CartItem extends Component {
  render() {
    const itemAmt = getCurrencyWithAmount(this.props.data.price);
    const totalAmt = getCurrencyWithAmount(this.props.data.lineTotal);
    return (
      <div className="CartItem">
        <h4>{this.props.data.name}</h4>
        Quantity: {this.props.data.quantity} @ {itemAmt} <br></br>
        <strong>SUBTOTAL: {totalAmt} </strong>
        <button onClick={() => this.props.actions.removeItemFromCart(this.props.cart, this.props.data.sku)}>REMOVE</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
