export const action = amount => ({
  type: 'TAKE_HIT',
  amount
});

export const reducer = (state, action) => {
  const newHealth = state.hp - action.amount;
  return {
    ...state,
    hp: newHealth
  };
};
