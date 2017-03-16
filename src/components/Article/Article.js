import React, { Component } from 'react';
import { getCurrencyWithAmount } from '../../utils/getCurrency';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../utils/reduxHelper';
class Article extends Component {

  render() {
    const htmlAmt = getCurrencyWithAmount(this.props.data.price);
    const link = "/article/" + this.props.data.sku;
    return (
      <div className="Article">
        <Link to={link}>{this.props.data.name}</Link><br></br>
        <img src={this.props.data.image} alt={this.props.data.name}></img><br></br>
        {htmlAmt}<br></br>
      <button onClick={() => this.props.actions.addItemToCart(this.props.cart, this.props.data.sku)}>Add to cart</button>
      </div>
    );
  }
}
/**
 * Connect the component to
 * the Redux store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
