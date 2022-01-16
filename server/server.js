const app = require('./src/app');
const logger = require('./src/utils/logger');
const mongoUtil = require('./src/mongoUtil')

const port = process.env.PORT || 5002;

app.listen(port, async () => {
  try {
    mongoUtil.connectToServer((err, client) => {
      if (err) console.log(err); 
      console.log("Connected to Mongo!")
    }); 
    logger.info(`Server is running on port: ${port}`);
  } catch (err) {
    logger.info(`Error starting server: ${err}`);
  }
});
