const app = require('./src/app');
const logger = require('./src/utils/logger');

const port = process.env.PORT || 5002;

app.listen(port, async () => {
  try {
    logger.info(`Server is running on port: ${port}`);
  } catch (err) {
    logger.info(`Error starting server: ${err}`);
  }
});
