import store from '../store';
import renewTable from './renew-table';
import { action as setStatusAction } from '../redux-actions/set-status';
import { action as resetAction } from '../redux-actions/reset';

export default () => {
  const currentStatus = store.getState().status;
  if (currentStatus === 'stop') {
    store.dispatch(resetAction('on'));
    store.dispatch(setStatusAction('on'));
    renewTable();
  }
}
