const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return {};

    default:
      return state;
  }
};

export default authReducer;
