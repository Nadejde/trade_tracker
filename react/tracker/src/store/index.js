import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const trades = (state = [], trade) => {
  switch (trade.type) {
    case 'BUY':
    case 'SELL':
      return [
        ...state,
        trade
      ];
    default:
      return state;
  }
};

const tradeApp = combineReducers({
  trades
});

export default createStore(tradeApp);