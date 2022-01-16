const router = require('express').Router();
const axios = require('axios');

require('dotenv').config({ path: require('find-config')('.env') })

// Expect url in body. Use this endpoint to send a request to transcribe an audio file. 
// Not expected to use in front end. 

router.post('/', async (req, res) => {
  console.log(req.body.url);
  try {
  const resp = await postTranscriptionAzure(req.body.url); 
  res.send(resp.data); 
  return res.status(200); 
  }
  catch (err) {
    return res.status(500); 
  }
 
});
const URL = process.env.BASE_URL
const SUBSCRIPTION_KEY = process.env.AZURESUBSCRIPTION; 
const headers = {
  'Content-Type': 'application/json', 
  'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY
}; 
async function postTranscriptionAzure(url) {
  const reqData =  {
      "contentUrls": [ url ],
      "properties": {
        "diarizationEnabled": false,
        "wordLevelTimestampsEnabled": true,
        "punctuationMode": "DictatedAndAutomatic",
        "profanityFilterMode": "Masked"
      },
      "locale": "en-US",
      "displayName": "Eliz homes transcription"
    }

const finalRes = await axios.post(URL,reqData, {
   headers: headers 
 }); 
return finalRes; 
}

module.exports = router;
