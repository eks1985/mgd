export default (state = false, action) => {
  switch (action.type) {
    case 'SET_SLIDER2_ON':
      return true;
    case 'SET_SLIDER2_OFF':
      return false;
    default:
      return state;
  }
};
