import React, { Component } from 'react';
import{ getCurrencyWithAmount } from '../../utils/getCurrency';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../utils/reduxHelper';
class ArticleDetail extends Component {

  render() {
    const htmlAmt = getCurrencyWithAmount(this.props.data.price);
    return (
      <div className="ArticleDetail">
        {this.props.data.sku} <br></br>
        {this.props.data.name}
        <img src={this.props.data.image} alt={this.props.data.name}></img><br></br>
        {htmlAmt}<br></br>
      <button onClick={() => this.props.actions.addItemToCart(this.props.cart, this.props.data.sku)}>Add to cart</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
