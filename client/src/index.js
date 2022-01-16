import React from 'react';
import ReactDOM from 'react-dom';
import history from './utils/history.utils';
import App from './App';

// Routes the user to the right place after login
const onRedirectCallback = appState => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
