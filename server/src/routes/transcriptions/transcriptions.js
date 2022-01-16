const router = require('express').Router();
const config = require('./podcast.json')

// Expect url in body 
router.post('/', (req, res) => {
  res.send({ title: 'Hello World' }); 

  var recognizedPhrases = config['recognizedPhrases']
  
  var phrases = []
  for (let i = 0; i < recognizedPhrases.length; i++) {
      phrases.push(recognizedPhrases[i]['nBest'][0]['display']);
  }

  var timestamps_for_phrases = []
  for (let i = 0; i < recognizedPhrases.length; i++) {
    timestamps_for_phrases.push(recognizedPhrases['offset'])
  }

  // initialize test variables
  var index = 1
  var timestamp = 'PT3M38.95S'

  var transcript_phrase = recognizedPhrases[index]
  var transcript_words = transcript_phrase['nBest'][0]['words']
  for (let i = 0; i < transcript_words.length - 1; i++) {
    isTimestampWithinRange(timestamp, transcript_words[i]['offset'], transcript_words[i+1]['offset'])
  }

});

function isTimestampWithinRange(timestamp, leftOffset, rightOffset) {
    var _timestamp = parseOffset(timestamp)
    var _leftOffset = parseOffset(leftOffset)
    var _rightOffset = parseOffset(rightOffset)

    if (_timestamp.length == 1) _timestamp.unshift('0')
    if (_leftOffset.length == 1) _leftOffset.unshift('0')
    if (_rightOffset.length == 1) _rightOffset.unshift('0')

    console.log(_timestamp)
    console.log(_leftOffset)
    console.log(_rightOffset)

    return true;
};

function parseOffset(timestamp) {
    var timeArray = timestamp.split(/PT|M|S/)
    timeArray = timeArray.filter(x => x != '');
    return timeArray
}

//   fetch('https://yesno.wtf/api')
//     .then(res => res.json())
//     .then((out) => {
//       console.log(out);
//     })
//     .catch(err => {
//       throw err
//     });
//     return res.status(200); 
//   });

module.exports = router;
