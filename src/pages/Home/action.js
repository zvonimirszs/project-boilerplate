export const increase = value => ({
  type: 'INCREASE',
  value,
});
export const setCardEvents = objCard => ({
  type: 'SET-CARD',
  objCard,
});
export const removeCardEvents = objCard => ({
  type: 'REMOVE-CARDEVENT',
  objCard,
});
export const showPopupBeer = value => ({
  type: 'SHOW_POPUP_BEER',
  value,
});
export const removePopupBeer = () => ({
  type: 'REMOVE_POPUP_BEER',
});
