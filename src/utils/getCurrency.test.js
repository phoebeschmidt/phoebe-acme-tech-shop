import { getCurrencyWithAmount } from './getCurrency';

test('it concatenates correct currency with amount', () => {
  const priceObj = { amount: 100, currency: 'EUR'};
  const result = getCurrencyWithAmount(priceObj);
  expect(result.includes(priceObj.amount)).toEqual(true);
})
