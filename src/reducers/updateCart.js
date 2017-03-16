

function cartReducer(state, action) {
  switch(action.type) {
    case 'REQUEST_CART_UPDATE':
      return Object.assign({}, state, { fetching: true });
    case 'RECEIVE_NEW_CART':
      return Object.assign({}, action.cart, { fetching: false })
  }
  return state;
}

export default cartReducer;
