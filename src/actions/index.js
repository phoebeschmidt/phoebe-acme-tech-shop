import { config } from '../config.js';
import { errorHandler, json } from '../utils/dataFetcher';

export const UPDATE_CART = 'UPDATE_CART'

export function addItemToCart(cart, newItemSku) {
  const newItems = cart.lines.concat({
    sku: newItemSku,
    quantity: 1
  });
  return updateCartApi({lines: newItems});
}

export function removeItemFromCart(cart, removeMeSku) {
  let newItemsList = [];
  console.log(cart);
  cart.lines.forEach((item) => {
    console.log('remove', removeMeSku);
    console.log('current', item.sku);
    if (item.sku !== removeMeSku) {
      newItemsList.push(item);
    }
  });
  console.log(newItemsList)
  return updateCartApi({lines: newItemsList});
}

function updateCartApi(newCart) {
  console.log('updating cart with', newCart);
  const url = config.BASE_URL + "/cart";
  const init = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCart)
  };
  return dispatch => {
    dispatch(requestCartUpdate());
    fetch(url, init).then(errorHandler).then(json)
      .then((jsonResponse) => {
          dispatch(receiveNewCart(jsonResponse));
      })
      .catch((error) => {
        console.log(error)
        alert("Unfortunately, this couldnt be added to your cart at this time. Sorry about that!")
      });
  }
}

function requestCartUpdate() {
  return { type: 'REQUEST_CART_UPDATE' }
}

function receiveNewCart(newCart) {
  return { type: 'RECEIVE_NEW_CART', cart: newCart }
}
