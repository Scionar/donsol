import { createStore } from 'redux';
import { reducer as addCardReducer } from './redux-actions/add-card';
import { reducer as removeCardReducer } from './redux-actions/remove-card';
import { reducer as clearTableReducer } from './redux-actions/clear-table';
import { reducer as takeHitReducer } from './redux-actions/take-hit';
import { reducer as takeHealthReducer } from './redux-actions/take-health';
import { reducer as addExperienceReducer } from './redux-actions/add-experience';


const initialState = {
  deck: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13',
    'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13',
    's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13',
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13'
  ],
  table: [],
  hp: 21,
  dp: 0,
  xp: 0
};

// const persistState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : initialState;

const persistState = initialState;

const rootReducer = (state = persistState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return addCardReducer(state, action);
    case 'REMOVE_CARD':
      return removeCardReducer(state, action);
    case 'CLEAR_TABLE':
      return clearTableReducer(state, action);
    case 'TAKE_HIT':
      return takeHitReducer(state, action);
    case 'TAKE_HEALTH':
      return takeHealthReducer(state, action);
    case 'ADD_EXPERIENCE':
      return addExperienceReducer(state, action);
    default:
      return state;
  }
};

let store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState(), 'Updatet state');
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
