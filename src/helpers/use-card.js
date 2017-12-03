import store from '../store';
import isTableEmpty from './is-table-empty';
import userIsDead from './user-is-dead';
import renewTable from './renew-table';
import { action as takeHitAction } from '../redux-actions/take-hit';
import { action as takeHealthAction } from '../redux-actions/take-health';
import { action as addExperienceAction } from '../redux-actions/add-experience';
import { action as pickShieldAction } from '../redux-actions/pick-shield';
import { action as useCardAction } from '../redux-actions/use-card';
import { action as setMessageAction } from '../redux-actions/set-message';
import { action as setStatusAction } from '../redux-actions/set-status';

export default card => {
  const cardType = card[0];
  const cardValue = +card.substr(1);
  const status = store.getState().status;

  if (status === 'on') {
    store.dispatch(useCardAction(card));

    if (cardType === 'c' || cardType === 's') {
      store.dispatch(takeHitAction(cardValue));
      store.dispatch(setMessageAction('Battled monster'));
    }
    else if (cardType === 'h') {
      store.dispatch(takeHealthAction(cardValue));
      store.dispatch(setMessageAction('Drank potion.'));
    }
    else if (cardType === 'd') {
      store.dispatch(pickShieldAction(cardValue));
      store.dispatch(setMessageAction('Equipped shield.'));
    }

    store.dispatch(addExperienceAction(1));

    if (userIsDead()) {
      store.dispatch(setMessageAction('Died.'));
      store.dispatch(setStatusAction('stop'));
    }

    if (isTableEmpty()) {
      renewTable();
    }
  }

  // todo: Check game status functions here.
}
