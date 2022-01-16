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
  var index = 12
  var timestamp = 'PT3M38.95S'

  var transcript_phrase = recognizedPhrases[index]
  var transcript_words = transcript_phrase['nBest'][0]['words']
  for (let i = 0; i < transcript_words.length - 1; i++) {
    isTimestampWithinRange(timestamp, transcript_words[i]['offset'], transcript_words[i+1]['offset'])
  }
});

function isTimestampWithinRange(timestamp, leftOffset, rightOffset) {
    var parsedTimestamp = parseOffset(timestamp)
    var parsedLeftOffset = parseOffset(leftOffset)
    var parsedRightOffset = parseOffset(rightOffset)

    if (parsedTimestamp.length == 2) parsedTimestamp.unshift('0')
    if (parsedLeftOffset.length == 2) parsedLeftOffset.unshift('0')
    if (parsedRightOffset.length == 2) parsedRightOffset.unshift('0')

    parsedTimestamp = parsedTimestamp.map(parseFloat)
    parsedLeftOffset = parsedLeftOffset.map(parseFloat)
    parsedRightOffset = parsedRightOffset.map(parseFloat)

    var timeStampDate = new Date(0);
    var leftOffsetDate = new Date(0);
    var rightOffsetDate = new Date(0);

    timeStampDate.setMinutes(parsedTimestamp[0], parsedTimestamp[1], parsedTimestamp[2])
    leftOffsetDate.setMinutes(parsedLeftOffset[0], parsedLeftOffset[1], parsedLeftOffset[2])
    rightOffsetDate.setMinutes(parsedRightOffset[0], parsedRightOffset[1], parsedRightOffset[2])

    // console.log(leftOffsetDate, timeStampDate, rightOffsetDate)

    // if (leftOffsetDate <= timeStampDate && timeStampDate <= rightOffsetDate) {
    //   console.log('YAY!')
    // } else {
    //   console.log('...')
    // }

    let url = 'https://spsvcprodusw.blob.core.windows.net/bestor-338cca94-e7c5-4fc1-8a7b-7b8c19fd291a/TranscriptionData/8fb95f81-a41c-435c-9f2d-4ca06c1fc370_0_0.json?sv=2020-08-04&st=2022-01-15T23%3A14%3A58Z&se=2022-01-16T11%3A19%3A58Z&sr=b&sp=rl&sig=8EEpR2IGxdj%2BzJXGRVBac7pAgOi3Uy8rWt9thPjLT0g%3D';
    fetch(url)
      .then(res => res.json())
      .then(out =>
        console.log('Checkout this JSON! ', out))

    

    return leftOffsetDate.getTime() <= timeStampDate.getTime() && timeStampDate.getTime() <= rightOffsetDate.getTime();
};

function parseOffset(timestamp) {
    var timeArray = timestamp.split(/PT|M|S|\./)
    timeArray = timeArray.filter(x => x != '');
    return timeArray
}



  // fetch('https://yesno.wtf/api')
  //   .then(res => res.json())
  //   .then((out) => {
  //     console.log(out);
  //   })
  //   .catch(err => {
  //     throw err
  //   });
  //   return res.status(200); 
  // });

module.exports = router;
