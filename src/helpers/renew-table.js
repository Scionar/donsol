import store from '../store';
import { action as clearTableAction } from '../redux-actions/clear-table';
import { action as addCardAction } from '../redux-actions/add-card';
import { action as removeCardAction } from '../redux-actions/remove-card';

export default () => {
  const status = store.getState().status;

  if (status === 'on') {
    store.dispatch(clearTableAction());
    for (let i = 0; i < 4; i++) {
      const deck = store.getState().deck;
      const randomIndex = Math.floor((Math.random() * deck.length));
      const card = deck[randomIndex];

      if (card) {
        store.dispatch(addCardAction(card));
        store.dispatch(removeCardAction(card));
      }
    }
  }
}
