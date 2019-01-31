export const homeReducer = (state = {
  beers: [], cardevents: [], menulinks: [], popupBeer: {},
}, action) => {
  switch (action.type) {
    case 'SET-CARD':
      const currentCardEvents = state.cardevents.slice();
      currentCardEvents.push(action.objCard);
      //return Object.assign({}, state, { cardevents: currentCardEvents });
      return {
        ...state,
        cardevents: currentCardEvents,
      };
    case 'REMOVE-CARDEVENT':
      const stateCartEvents = state.cardevents.slice();
      stateCartEvents.pop(action.objCard);
      return Object.assign({}, state, { cardevents: stateCartEvents });
    case 'SHOW_POPUP_BEER':
      return {
        ...state,
        popupBeer: action.value,
      };
    case 'REMOVE_POPUP_BEER':
      return {
        ...state,
        popupBeer: {},
      };
    default:
      return state;
  }
};
