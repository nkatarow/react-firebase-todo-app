import actionType from '../constants';

const initialState = {
  sections: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_SECTIONS_SUCCESS:
      return {
        sections: action.payload,
      };

    default:
      return state;
  }
};
