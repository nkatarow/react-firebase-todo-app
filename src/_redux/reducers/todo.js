const initialState = {
  sections: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_NAME':
      return {
        ...state, // make a copy of previous state first before mutating
        // stuff you want to update here
      };

    default:
      return state;
  }
};
