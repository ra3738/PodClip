/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import Clips from './Clips'
import Timeline from './Timeline'

import styles from '../styles/NowPlaying.scss'

class NowPlaying extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { history } = createHistory({ forceRefresh: true });
    return (
      <div className="screen">
        <div className="container">
        <Clips />
        <Timeline />
        {/* <Controls />
        <Player /> */}
        </div>
      </div>
    );
  }
};

export default NowPlaying;