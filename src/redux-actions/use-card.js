export const action = name => ({
  type: 'USE_CARD',
  name
});

export const reducer = (state, action) => {
  const newTable = state.table.map(current => {
    if (current.name === action.name) return { ...current, used: true };
    return current;
  });

  return {
    ...state,
    table: newTable
  };
};
