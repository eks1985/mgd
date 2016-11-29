
import { authMedia } from '../firebase/firebase-app-media';

export const listenToAuthMedia = () => {
	return (dispatch, getState) => {
		authMedia.onAuthStateChanged((authData) => {
			if (authData) {
				dispatch({
					type: 'AUTH_MEDIA_LOGIN',
					uid: authData.uid,
					username: authData.displayName
				});
				//here listen to some data from firebase
			} else {
				if (getState().auth.status !== 'AUTH_MEDIA_ANONYMOUS') {
					dispatch({ type: 'AUTH_MEDIA_LOGOUT' });
				}
			}
		});
	};
};

export const openAuthMedia = () => {
	return (dispatch) => {
		dispatch({ type: 'AUTH_MEDIA_OPEN' });
		authMedia.signInAnonymously()
			.catch(function(error) {
	    		dispatch({
						type: 'AUTH_MEDIA_DISPLAY_ERROR',
						error: `Login failed! ${error}`
					});
					dispatch({ type: 'AUTH_MEDIA_LOGOUT' });
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch({ type: 'AUTH_MEDIA_LOGOUT' });
		authMedia.signOut();
	};
};
