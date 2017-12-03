export const action = amount => ({
  type: 'PICK_SHIELD',
  amount
});

export const reducer = (state, action) => {
  const newShield = action.amount;
  return {
    ...state,
    dp: newShield
  };
};
