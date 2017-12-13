const uuidv1 = require('uuid/v1');

export const addTransaction = ({ type, symbol, quantity, price }) => {
  return {
    type,
    id: uuidv1(),
    symbol,
    quantity,
    price
  };
};