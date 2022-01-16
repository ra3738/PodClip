import React from 'react';

class Clips extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="clip">
        <div className="clip-titleline">
          <h2 className="clip-title">Clip title</h2>
          <p className="clip-timestamp">13:11</p>
        </div>
        <div className="clip-quote">
          <div className="">
            <p>Go into it, asking yourself, "Are red M&amp;M's the best tasting M&amp;M's in the world?" And you only look at that, you're going to blind yourself to the objective data that you're going to see.</p>
          </div>
        </div>
        <div className="clip-controls">
          <div>
            <div style={{marginRight: "10px"}}>Edit</div>
            <div>Delete</div>
          </div>
          <div>
            <div>Jump to</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Clips;