export default (state = false, action) => {
  switch (action.type) {
    case 'SET_SLIDER3_ON':
      return true;
    case 'SET_SLIDER3_OFF':
      return false;
    default:
      return state;
  }
};
