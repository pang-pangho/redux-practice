let initialState = {
  count: 0,
  num: 0,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT5":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT5":
      return { ...state, count: state.count - action.payload.num };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
