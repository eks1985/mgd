// import modelsInitial from './initialData/models.json';
import { combineReducers } from 'redux';

const items = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_MODELS':
      return { ...state, ...action.payload }
    default:
      return state;
  }
};

const current =  (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_MODEL':
      return action.id;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  current
});

// selector

export const getModelsIdsByCategory = (models, categoryId) => {
  const keys = Object.keys(models);
  return keys.reduce((res, key) => {
    return models[key].categoryRef === categoryId ? [ ...res, key ] : res;
  },[]);
};
