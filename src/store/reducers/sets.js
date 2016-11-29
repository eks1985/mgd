// import setsInitial from './initialData/sets.json';
import { combineReducers } from 'redux';

const items = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_SETS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const current = (state = '', action) => {
  switch (action.type) {
    case 'SET_SET_CURRENT':
      return action.id;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  current
});

//selectors

export const getSetsIdsByModel = (sets, modelId) => {
  const keys = Object.keys(sets);
  return keys.reduce((res, key) => {
    return sets[key].modelRef === modelId ? [ ...res, key ] : res;
  },[]);
}
