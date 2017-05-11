const defaultState = {
  value: 0
};

export const START = 'start';
export const REQUEST = 'request';
export const INCREMENT = 'increment';
export const STOP = 'stop';

const reducer = (state = defaultState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + 1,
    };
  }

  return state;
};

export default reducer;
