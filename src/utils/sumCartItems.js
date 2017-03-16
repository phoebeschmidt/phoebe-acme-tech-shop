export function sumCartItems(cart) {
  let sum = 0;
  for (let item in cart) {
      let i = (item.quantity) ? item.quantity : 1;
      sum += i;
  }
  return sum;
}
