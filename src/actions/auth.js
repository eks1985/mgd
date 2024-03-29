import { auth } from '../firebase/firebase-app';
import { listenToCategory } from './firebase/category';
import { listenToModels } from './firebase/models';
import { listenToSets } from './firebase/sets';

export const listenToAuth = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged((authData) => {
			if (authData) {
				dispatch({
					type: 'AUTH_LOGIN',
					uid: authData.uid,
					username: authData.displayName
				});
				dispatch(listenToCategory());
				dispatch(listenToModels());
				dispatch(listenToSets());
				//here listen to some data from firebase
			} else {
				if (getState().auth.status !== 'AUTH_ANONYMOUS') {
					dispatch({ type: 'AUTH_LOGOUT' });
				}
			}
		});
	};
};

export const openAuth = () => {
	return (dispatch) => {
		dispatch({ type: 'AUTH_OPEN' });
		auth.signInAnonymously()
			.catch(function(error) {
	    		dispatch({
						type: 'AUTH_DISPLAY_ERROR',
						error: `Login failed! ${error}`
					});
					dispatch({ type: 'AUTH_LOGOUT' });
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch({ type: 'AUTH_LOGOUT' });
		auth.signOut();
	};
};
