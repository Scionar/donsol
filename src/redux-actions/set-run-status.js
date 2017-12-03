export const action = status => ({
  type: 'SET_RUN_STATUS',
  status
});

export const reducer = (state, action) => {
  return {
    ...state,
    lastRun: action.status
  };
};
