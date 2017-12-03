import store from '../store';

export default () => {
  const health = store.getState().hp;
  if (health < 1) return true;
  return false;
}
