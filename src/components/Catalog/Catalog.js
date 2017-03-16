import React, { Component } from 'react';
import Article from '../Article/Article';
import './Catalog.css';

class Catalog extends Component {

  render() {
    const articleComponents = this.props.articles.map((a) => {
      return <Article data={a} key={a.sku} sku={a.sku}></Article>
    });
    return (
      <div className="Catalog">
      {articleComponents}
      </div>
    );
  }
}
Catalog.defaultProps = {
  articles: []
}
export default Catalog;
