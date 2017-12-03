export const action = amount => ({
  type: 'TAKE_HEALTH',
  amount
});

export const reducer = (state, action) => {
  const proposedHealth = state.hp + action.amount;
  const newHealth = proposedHealth > 21 ? 21 : proposedHealth;
  return {
    ...state,
    hp: newHealth
  };
};
