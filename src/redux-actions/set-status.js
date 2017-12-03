export const action = status => ({
  type: 'SET_STATUS',
  status
});

export const reducer = (state, action) => {
  return {
    ...state,
    status: action.status
  };
};
