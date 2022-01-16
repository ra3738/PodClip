import React from 'react';
import Clip from './Clip.jsx'

class Clips extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
	  	<h1>Episode Clips</h1>
		{/* <div className="noclips-placeholder">You haven’t created any clips for this episode yet.</div> */}
        <Clip />
        <Clip />
      </div>
    );
  }
};

export default Clips;