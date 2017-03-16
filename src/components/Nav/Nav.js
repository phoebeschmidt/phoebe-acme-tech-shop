import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './Nav.css'
import { getCurrencyWithAmount } from '../../utils/getCurrency';
import { mapStateToProps } from '../../utils/reduxHelper';
import { sumCartItems } from '../../utils/sumCartItems';

class Nav extends Component {

  render() {
    const htmlAmt = getCurrencyWithAmount(this.props.cart.total);

    return (
      <div className="Nav">
        <div className="Nav-header">
        <h1>WELCOME TO ACME TECH SHOP</h1>
        <p className="catalogLink"><Link to={"/"}>Catalog</Link></p>
        <p><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart"></span></Link>{sumCartItems(this.props.cart.lines)} Items {htmlAmt}</p>
      </div>

      </div>
    );
  }
}


export default connect(
  mapStateToProps
)(Nav);
