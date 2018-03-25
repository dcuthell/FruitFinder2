export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}


/**************************************************************
This is a nifty helper function written by Jeremy(?). Here's
how it's used:

  export default createReducer(defaultState, {

    [CONNECTIVITY_SET](state, action) {
      return state.set('connectivity', action.payload);
    },

  });

The function takes in the initialState and the handlers, of
which there is one per action type. In this example, there is
only one action type for this reducer, but the helper function
can handle many more!
**************************************************************/
