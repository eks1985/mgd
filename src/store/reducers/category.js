// import categoryInitial from './initialData/category.json';

export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_CATEGORY':
      return { ...state, ...action.payload }
    default:
      return state;
  }
};
