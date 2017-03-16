import { config } from '../config.js';

function startNewCart() {
  const url = config.BASE_URL + '/cart';
  return fetch(url).then(errorHandler).then(json);
}

function json(response) {
  return response.json();
}

function errorHandler(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return Promise.resolve(response);
}

//FIXME: this is only used once, to get cart quote from empty cart in initialization.
//INSTEAD: use redux action "updateCart"
function getCartQuote(response) {
  const url = config.BASE_URL + "/cart";
  const init = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(response)
  }
  return fetch(url, init).then(errorHandler).then(json);

}

function getCatalogItems() {
  const url = config.BASE_URL + "/catalog";
  return fetch(url).then(errorHandler).then(json);
}

function getArticleDetails(sku) {
  const url =   config.BASE_URL + "/article/" + sku;
  return fetch(url).then(errorHandler).then(json);

}

export {startNewCart, getCatalogItems, getCartQuote, getArticleDetails, errorHandler, json}
