import store from '../store';
import { action as takeHitAction } from '../redux-actions/take-hit';
import { action as takeHealthAction } from '../redux-actions/take-health';
import { action as addExperienceAction } from '../redux-actions/add-experience';
import { action as pickShieldAction } from '../redux-actions/pick-shield';

export default card => {
  const cardType = card[0];
  const cardValue = +card.substr(1);

  if (cardType === 'c' || cardType === 's') {
    store.dispatch(takeHitAction(cardValue));
  }
  else if (cardType === 'h') {
    store.dispatch(takeHealthAction(cardValue));
  }
  else if (cardType === 'd') {
    store.dispatch(pickShieldAction(cardValue));
  }

  store.dispatch(addExperienceAction(1));

  // todo: Check game status functions here.
}
