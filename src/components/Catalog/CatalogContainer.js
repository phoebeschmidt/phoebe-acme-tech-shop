import React, { Component } from 'react';
import { getCatalogItems } from '../../utils/dataFetcher';
import Catalog from './Catalog';

class CatalogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    getCatalogItems().then((response) => {
      this.setState({articles: response.articles})
    });
  }

  render() {
    return (
      <div className="CatalogContainer">
        <Catalog articles={this.state.articles}></Catalog>
      </div>
    );
  }
}

export default CatalogContainer;
