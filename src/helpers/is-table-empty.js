import store from '../store';

export default () => {
  const table = store.getState().table;
  for (let i = 0; i < table.length; i++) {
    if ( !table[i].used ) return false;
  }
  return true;
}
