import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { listenToCategory } from './actions/firebase/category';
import { listenToModels } from './actions/firebase/models';
import { listenToSets } from './actions/firebase/sets';
import { listenToAuth } from './actions/auth';
import { listenToAuthMedia } from './actions/auth-media';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class root extends Component {

  componentWillMount()  {
		store.dispatch(listenToAuth());
    store.dispatch(listenToAuthMedia());
    store.dispatch(listenToCategory());
    store.dispatch(listenToModels());
    store.dispatch(listenToSets());
	}

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }

}
