export const action = amount => ({
  type: 'TAKE_HIT',
  amount
});

export const reducer = (state, action) => {
  let newShield = state.dp;
  let newPreviousMonster = action.amount;

  // If shield gets broken.
  if (state.previousMonster !== null && action.amount >= state.previousMonster){
    newShield = 0;
    newPreviousMonster = null;
  }

  const hitAfterShield = action.amount - newShield;
  const hit = hitAfterShield < 0 ? 0 : hitAfterShield;
  const newHealth = state.hp - hit;

  return {
    ...state,
    hp: newHealth,
    dp: newShield,
    previousMonster: newPreviousMonster
  };
};
