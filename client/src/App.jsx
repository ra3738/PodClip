import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthenticatedWelcomePage from './components/AuthenticatedWelcomePage';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <AuthenticatedWelcomePage />
      </Router>
    </Provider>
  );
};

export default App;
