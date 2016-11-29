export default (state = false, action) => {
  switch (action.type) {
    case 'SET_SLIDER1_ON':
      return true;
    case 'SET_SLIDER1_OFF':
      return false;
    default:
      return state;
  }
};
