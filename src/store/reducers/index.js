import { combineReducers } from 'redux';
//reducers
import auth from './auth';
import authMedia from './auth-media';
import modal from './../../lib/modal/reducers/modal';
import content from './content'
import category from './category';
import models from './models';
import sets from './sets';
import slider1 from './slider1';
import slider2 from './slider2';
import slider3 from './slider3';
import orders from './orders';
import messages from './messages';

const rootReducer = combineReducers({
	auth,
	authMedia,
	modal,
	content,
	category,
	models,
	sets,
	slider1,
	slider2,
	slider3,
	orders,
	messages
});

export default rootReducer;
