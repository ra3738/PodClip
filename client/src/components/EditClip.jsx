/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import Timeline from './Timeline'
import Transcript from './Transcript'

import styles from '../styles/EditClip.scss'

// from http://jsfiddle.net/rrvw4/23/



class EditClip extends React.Component {
  constructor(props) {
    super(props)
  }

  snapSelectionToWord = () => {
    console.log("test!!!"); 
    var sel;

    // Check for existence of window.getSelection() and that it has a
    // modify() method. IE 9 has both selection APIs but no modify() method.
    if (window.getSelection && (sel = window.getSelection()).modify) {
        sel = window.getSelection();
        if (!sel.isCollapsed) {

            // Detect if selection is backwards
            var range = document.createRange();
            range.setStart(sel.anchorNode, sel.anchorOffset);
            range.setEnd(sel.focusNode, sel.focusOffset);
            var backwards = range.collapsed;
            range.detach();

            // modify() works on the focus of the selection
            var endNode = sel.focusNode, endOffset = sel.focusOffset;
            sel.collapse(sel.anchorNode, sel.anchorOffset);
            
            var direction = [];
            if (backwards) {
                direction = ['backward', 'forward'];
            } else {
                direction = ['forward', 'backward'];
            }

            sel.modify("move", direction[0], "character");
            sel.modify("move", direction[1], "word");
            sel.extend(endNode, endOffset);
            sel.modify("extend", direction[1], "character");
            sel.modify("extend", direction[0], "word");
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        if (textRange.text) {
            textRange.expand("word");
            // Move the end back to not include the word's trailing space(s),
            // if necessary
            while (/\s$/.test(textRange.text)) {
                textRange.moveEnd("character", -1);
            }
            textRange.select();
        }
    }
  }

  render() {
    const { history } = createHistory({ forceRefresh: true });
    return (
      <div className="screen">
        {/* <div className="container" onMouseUp={ this.snapSelectionToWord } onTouchEnd={ this.snapSelectionToWord }> */}
        <div className="container">
        <Transcript/>
        {/* <textarea className="captionBox">test</textarea> */}
        <input type="text" placeholder="Caption" className="captionBox"></input>
        {/* <Controls />
        <Player /> */}
        </div>
      </div>
    );
  }
};

export default EditClip;