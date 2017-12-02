export const action = card => ({
  type: 'ADD_CARD',
  card
});

export const reducer = (state, action) => {
  return {
    ...state,
    table: [ ...state.table, action.card]
  };
};
