const initialStates = {
  msg: {},
  status: null,
  id: null
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case 'ADD_SUCCESS':
      return {
        msg: action.msg,
        id: action.id
      };
    case 'CLEAR_SUCCESS':
      return {};
    default:
      return state;
  }
};
