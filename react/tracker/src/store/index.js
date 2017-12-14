import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadState, saveState } from './localStorage';

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

const persistendState = loadState();
const store = createStore(
  tradeApp,
  persistendState
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
