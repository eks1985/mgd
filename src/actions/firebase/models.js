import { database } from './../../firebase/firebase-app';

const categoryRef = database.ref('models').orderByChild('order');

export const listenToModels = () => {
  return dispatch => {
    categoryRef.off();
    categoryRef.once("value")
      .then( snapshot => {
        let res = {};
        snapshot.forEach( childSnapshot => {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          res[key] = childData;
        });
        return res;
      })
      .then( res => {
        dispatch({
          type: 'RECEIVE_MODELS',
          payload: res
        });
      })
      .catch( error => {
          dispatch({
            type: 'RECEIVE_MODELS_ERROR',
            payload: error.message
          });
      });
  };
};
