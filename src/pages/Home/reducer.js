export const homeReducer = (state = {number: 0}, action) => {
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, { number: state.number + action.value });
    default:
      return state;
  }   
};

// (prevStat, action) => nextState

const obj =  {
  ime: 'David',
};
const obj2 = Object.assign({}, obj);

const obj3 = { ...obj, ime: 'Joško' };
