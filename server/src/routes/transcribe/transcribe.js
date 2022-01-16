const router = require('express').Router();
const axios = require('axios');
require('dotenv').config({ path: require('find-config')('.env') })

// Expect url in body 
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

async function postTranscriptionAzure(url) {
  const headers = {
    'Content-Type': 'application/json', 
    'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY
  }; 
  const reqData =  {
      "contentUrls": [
        url 
      ],
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
console.log('Finished request to cog services') 
return finalRes; 
}
module.exports = router;
