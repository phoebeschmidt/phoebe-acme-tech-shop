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
  cart.lines.forEach((item) => {
    if (item.sku !== removeMeSku) {
      newItemsList.push(item);
    }
  });
  return updateCartApi({lines: newItemsList});
}

function updateCartApi(newCart) {
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
        if (error.status == 500) {
          alert("Unfortunately, this couldnt be added to your cart at this time. Sorry about that!")
        } else if (error.status == 400) {
          error.json().then((body) => evaluate400Error(body, newCart))
        }
      });
  }
}

//FIXME: finish this error handling
function evaluate400Error(body, newCart) {
  const re = /obj./;
  for (let prop in body) {
    if (body[prop][0].msg == "error.sku.unknown") {
      //remove this item from list and notify
      // const sku = prop.replace(re, 'newCart.');
      // removeItemFromCart()
    }
  }
}

function requestCartUpdate() {
  return { type: 'REQUEST_CART_UPDATE' }
}

function receiveNewCart(newCart) {
  return { type: 'RECEIVE_NEW_CART', cart: newCart }
}
