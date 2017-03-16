import React, { Component } from 'react';
import { getArticleDetails } from '../../utils/dataFetcher';
import ArticleDetail from './ArticleDetail';
import NotFound from '../NotFound/NotFound';
class ArticleDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
      // whoops: "Oh no! This product is not available at this time. We're sorry!"
    }
  }
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    getArticleDetails(this.props.params.sku).then((response) => {
      this.setState({data: response})
    })
    .catch((e) => {
      console.log(e, `Product ${this.props.params.sku} not available`);
    })
  }
  render() {
    const toRender = (this.state.data) ? <ArticleDetail data={this.state.data}></ArticleDetail> : <NotFound></NotFound> ;
    return (
      <div className="ArticleDetailContainer">
      {toRender}
      </div>
    );
  }
}

export default ArticleDetailContainer;
