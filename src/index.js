const express = require('express');
const PORT = process.env.PORT || 5000;
const listener = () => console.log(`Listening on Port ${PORT}!`);
const knex = require('./db/connection');
const app = express();
const cors = require('cors');
const birdsRouter = require('./birds/birds.router');
const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');
require('dotenv').config();
const AWS = require('aws-sdk');
const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET_NAME } =
  process.env;

// const development = process.env.NODE_ENV === 'development';
// const corsOrigin = development
//   ? 'http://localhost:3000'
//   : 'https://birdgenerator.onrender.com';

// app.use(cors({ origin: corsOrigin }));

app.use(cors({ origin: 'https://birdgenerator.onrender.com' }));

AWS.config.update({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

app.get('/image/:imageName', (req, res, next) => {
  const imageName = req.params.imageName;

  const s3Params = {
    Bucket: S3_BUCKET_NAME,
    Key: imageName,
  };

  const s3Stream = s3.getObject(s3Params).createReadStream();

  // When there is an error response from S3
  s3Stream.on('error', function (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve image from S3' });
  });

  s3Stream.pipe(res).on('error', function (err) {
    console.error('Stream Error', err);
    res.status(500).json({ error: 'Error streaming the image' });
  });
});

app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('/birds', birdsRouter);

app.use(notFound);
app.use(errorHandler);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log('migrations', migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);
