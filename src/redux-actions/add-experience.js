export const action = amount => ({
  type: 'ADD_EXPERIENCE',
  amount
});

export const reducer = (state, action) => {
  const proposedExperience = state.xp + action.amount;
  const newExperience = proposedExperience > 52 ? 52 : proposedExperience;
  return {
    ...state,
    xp: newExperience
  };
};
