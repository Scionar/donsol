export const action = card => ({
  type: 'REMOVE_CARD',
  card
});

export const reducer = (state, action) => {
  const newDeck = state.deck.filter(value => value !== action.card);
  return {
    ...state,
    deck: newDeck
  };
};
