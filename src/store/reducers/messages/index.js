import  { combineReducers } from 'redux';
import pagination from './pagination';

const items = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  items,
  pagination
});
