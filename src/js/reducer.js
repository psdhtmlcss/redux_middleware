

import { Action } from './action';

const updateStore = (initialState, action) => {
  switch(action.type) {
    case Action.ADD: return initialState + 1;
    case Action.MINUS: return initialState - 1;
    case Action.RESET: return initialState = 0;
    case Action.ADD_VALUE: return initialState + action.payload;
    default: return initialState;
  }
};

export { updateStore };