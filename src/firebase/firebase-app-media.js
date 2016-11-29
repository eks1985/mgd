import config from './config-media';
import * as firebaseMedia from 'firebase';

firebaseMedia.initializeApp(config.firebaseConfig, "firebase-media");
export const authMedia = firebaseMedia.auth();
export const databaseMedia = firebaseMedia.database();
