export const action = () => ({
  type: 'CLEAR_TABLE'
});

export const reducer = (state, action) => {
  return {
    ...state,
    table: []
  };
};
