function getCurrencyWithAmount(priceObj) {
  const {amount, currency} = priceObj;
  let htmlAmt = amount;
  switch (currency) {
    case 'EUR':
      htmlAmt = '\u20AC' + htmlAmt
      break;
    case 'USD':
      htmlAmt = '$' + htmlAmt
      break;
    default:
      htmlAmt = currency + ' ' + htmlAmt;
  }
  return htmlAmt;
}

export {getCurrencyWithAmount}
