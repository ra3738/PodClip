import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NowPlaying from './components/NowPlaying';
import EditClip from './components/EditClip';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        {/* <NowPlaying /> */}
        <EditClip />
      </Router>
    </Provider>
  );
};

export default App;
