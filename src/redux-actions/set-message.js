export const action = message => ({
  type: 'SET_MESSAGE',
  message
});

export const reducer = (state, action) => {
  return {
    ...state,
    message: action.message
  };
};
