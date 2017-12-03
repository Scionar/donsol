import store from '../store';
import renewTable from './renew-table';
import { action as setRunStatusAction } from '../redux-actions/set-run-status';

export default () => {
  store.dispatch(setRunStatusAction(true));
  renewTable();
}
