import store from '../store';
import renewTable from './renew-table';
import { action as setStatusAction } from '../redux-actions/set-status';

export default () => {
  const currentStatus = store.getState().status;
  if (currentStatus === 'stopped') {
    renewTable();
    store.dispatch(setStatusAction('on'));
  }
}
