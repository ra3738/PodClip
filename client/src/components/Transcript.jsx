import React from 'react';

class Transcript extends React.Component {
  constructor(props) {
    super(props)
  }

  surroundSelection() {
    console.log("did it");
    if (document.getElementById("highlight")) {
      var span = document.getElementById("highlight");
      span.outerHTML = span.innerHTML;
    }

    var span = document.createElement("span");
    span.setAttribute("id", "highlight");
    // span.style.backgroundColor = "#283359";
    // span.style.color = "#fff";

    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            // var range = sel.getRangeAt(0).cloneRange();
            // range.surroundContents(span);
            // sel.removeAllRanges();
            // sel.addRange(range);
            try {
            var range = window.getSelection().getRangeAt(0);
            var expandedSelRange = range.cloneRange();  
            expandedSelRange.surroundContents(span);
            range.collapse(false);
            } catch (error) {

            }
        }
    }
  }

  removeHighlight() {
    if (document.getElementById("highlight")) {
      var span = document.getElementById("highlight");
      span.outerHTML = span.innerHTML;
    }
  }

  highlight() {
    document.designMode = "on";
    if (!document.execCommand("HiliteColor", false, "#3d4b7e")) {
        document.execCommand("BackColor", false, "#3d4b7e");
    }
    document.designMode = "off";
  }

  render() {
    // document.addEventListener('selectionchange', () => {
    //   this.surroundSelection();
    // });


    return (
      // <iframe className="transcript-frame" title="Transcript">
      //   <html>
      //     <body>
      //     <span></span>
      //     <p></p>
            <div className='transcript' onMouseUp={this.surroundSelection}>
            {/* <div className='transcript' onMouseUp={this.surroundSelection} onTouchEnd={this.surroundSelection}> */}
            {/* <div className='transcript' onMouseUp={this.highlight} onTouchEnd={this.highlight}> */}
              {/* <p className="">Well, if you think about it, if you have attachment and expectations on yourself about the outcome, how this is supposed to go, it's going to blind you to as much of the objective data that you're going to see.
      If you go into it, asking yourself, "Are red M&amp;M's the best tasting M&amp;M's in the world?" And you only look at that, you're going to blind yourself to the objective data that you're going to see. I think you have to approach this... kind of like the way a scientist would do this.
      And I want to be clear. I'm no scientist. We have friends in common that are truly scientists, who have studied it, who make a career out of this. The detachment allows me to look at that and say, "As much as I love this, as hard as I worked on this, as much as I want people to love this piece of content, the data suggests otherwise." So I'm going to adjust, and this is very much true.
      This is not anecdotal. This is for real. When we were in our two-week content challenge and I was putting out posts on Instagram, I put too much into the carousels. I over taught and made things more complicated than they needed to be. So the data told me that. And so the hypothesis is then, "I wonder if it has to be lighter. This is too meaty. And people aren't on Instagram for this kind of content."
      So I started to thin it out, and I got it to a point in which I found that sweet spot, and each iterative cycle allows me to have more data, more measurements, more metrics so that I can then decide, I'm moving in the right direction. Or I'm moving in the wrong direction.</p> */}
              <p id="1">Once Upon a time in Hollywood, Once Upon a time in Hollywood, that's in that for, that's in comedic knives out. Yes, probably in comedic lot of really great movies. A lot of great TV shows. As I said up for contention, it's going to be a long night as it always is, but it should be a lot of fun. It'll be fun. I'm looking forward to it. I heard who's at my table.</p>
              <p id="2">I'm I'm very very much looking. Looking forward to it. You'll have a good time. I promise. Look at the activity around here too. It's it's places just bustling with bustling that's OK in a few hours it'll be. It'll be nuts here and it'll be a lot of fun. And who knows, we will check back in again at the end of the night and talk about.</p>
              <p id="3">The winners I will. I'd love that well, we'll see if you're still vertical Bible talk, but for now we're going to get back to this edition of the Rough Cut editor Maryann Brandon and Star Wars The Force Awakens we've been covering Last Jedi. We covered rise of Skywalker, makes all the sense in the world to go full circle and do Star Wars The Force awakens. So this presentation was recorded at the IBC Convention in 2018. You were there, Dave. I was there? Yes, terrific presentation Maryanne gave so actually.</p>
              
              <p id="4">Once Upon a time in Hollywood, Once Upon a time in Hollywood, that's in that for, that's in comedic knives out. Yes, probably in comedic lot of really great movies. A lot of great TV shows. As I said up for contention, it's going to be a long night as it always is, but it should be a lot of fun. It'll be fun. I'm looking forward to it. I heard who's at my table.</p>
              <p id="5">I'm I'm very very much looking. Looking forward to it. You'll have a good time. I promise. Look at the activity around here too. It's it's places just bustling with bustling that's OK in a few hours it'll be. It'll be nuts here and it'll be a lot of fun. And who knows, we will check back in again at the end of the night and talk about.</p>
              <p id="6">The winners I will. I'd love that well, we'll see if you're still vertical Bible talk, but for now we're going to get back to this edition of the Rough Cut editor Maryann Brandon and Star Wars The Force Awakens we've been covering Last Jedi. We covered rise of Skywalker, makes all the sense in the world to go full circle and do Star Wars The Force awakens. So this presentation was recorded at the IBC Convention in 2018. You were there, Dave. I was there? Yes, terrific presentation Maryanne gave so actually.</p>

              <p id="7">Once Upon a time in Hollywood, Once Upon a time in Hollywood, that's in that for, that's in comedic knives out. Yes, probably in comedic lot of really great movies. A lot of great TV shows. As I said up for contention, it's going to be a long night as it always is, but it should be a lot of fun. It'll be fun. I'm looking forward to it. I heard who's at my table.</p>
              <p id="8">I'm I'm very very much looking. Looking forward to it. You'll have a good time. I promise. Look at the activity around here too. It's it's places just bustling with bustling that's OK in a few hours it'll be. It'll be nuts here and it'll be a lot of fun. And who knows, we will check back in again at the end of the night and talk about.</p>
              <p id="9">The winners I will. I'd love that well, we'll see if you're still vertical Bible talk, but for now we're going to get back to this edition of the Rough Cut editor Maryann Brandon and Star Wars The Force Awakens we've been covering Last Jedi. We covered rise of Skywalker, makes all the sense in the world to go full circle and do Star Wars The Force awakens. So this presentation was recorded at the IBC Convention in 2018. You were there, Dave. I was there? Yes, terrific presentation Maryanne gave so actually.</p>

            </div>
      //     </body>
      //   </html>
      // </iframe>
    );
  }
};

export default Transcript;