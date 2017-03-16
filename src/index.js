import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';

// import Routes from './routes';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './components/App/App';
import CatalogContainer from './components/Catalog/CatalogContainer';
import ArticleDetailContainer from './components/ArticleDetail/ArticleDetailContainer';
import CartDetail from './components/CartDetail/CartDetail';
import NotFound from './components/NotFound/NotFound';
import './index.css';

import { startNewCart, getCartQuote } from './utils/dataFetcher';
import cartReducer from './reducers/updateCart';

const logger = createLogger();
const initialState = startNewCart().then(getCartQuote);
initialState.then((emptyCart) => {
  const store = createStore(cartReducer, emptyCart, applyMiddleware(logger, thunk));
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CatalogContainer} />
          <Route path="/article/:sku" component={ArticleDetailContainer} />
          <Route path="/cart" component={CartDetail} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
})
