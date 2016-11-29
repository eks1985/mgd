import { database } from './../../firebase/firebase-app';

const categoryRef = database.ref('sets').orderByChild('order');

export const listenToSets = () => {
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
          type: 'RECEIVE_SETS',
          payload: res
        });
      })
      .catch( error => {
          dispatch({
            type: 'RECEIVE_SETS_ERROR',
            payload: error.message
          });
      });
  };
};
