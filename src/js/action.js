export const Action = {
  ADD: 'ADD',
  MINUS: 'MINUS',
  RESET: 'RESET',
  ADD_VALUE: 'ADD_VALUE'
};

export const addAction = () => {
  return {
    type: Action.ADD
  }
};

export const minusAction = () => {
  return {
    type: Action.MINUS
  }
};

export const resetAction = () => {
  return {
    type: Action.RESET
  }
};

export const addValueAction = (value) => {
  return {
    type: Action.ADD_VALUE,
    payload: value
  }
};