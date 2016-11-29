import { combineReducers } from 'redux';

const pageNumber = (state = 1, action) => {
  switch (action.type) {
    case 'INCREASE_PAGE_NUMBER_ORDERS':
      return state +=1;
    case 'DECREASE_PAGE_NUMBER_ORDERS':
        return state -=1;
    case 'SET_PAGE_NUMBER_ORDERS':
        return action.pageNumber;
    default:
     return state;
  }
}

const qtyPages = (state = 0, action) => {
  switch (action.type) {
    case 'SET_QTY_PAGES_ORDERS':
      return action.qtyPages;
    default:
     return state;
  }
}

const isLastPage = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_LAST_PAGE_ORDERS':
      return action.payload;
    default:
     return state;
  }
}

export default combineReducers({
  pageNumber,
  qtyPages,
  isLastPage
});
