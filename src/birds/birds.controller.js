const service = require('./birds.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

async function getSignedURL(imageName) {
  return new Promise((resolve, reject) => {
    const s3Params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: imageName,
      Expires: 3600,
    };

    s3.getSignedUrl('getObject', s3Params, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
}

async function list(req, res, next) {
  const data = await service.getAllBirds();
  //   console.log(data);
  res.status(200).json({ data: data });
}

async function getRandomBird(req, res, next) {
  const data = await service.getRandomBird();
  res.json({ data: data });
}

async function read(req, res, next) {
  const { birdId } = req.params;
  const data = await service.read(birdId);

  if (!data) {
    return next({
      status: 404,
      message: `Bird with ID ${birdId} not found.`,
    });
  }

  if (data.imageName) {
    data.imageURL = await getSignedURL(data.imageName);
  }

  res.json({ data: data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  getRandomBird: asyncErrorBoundary(getRandomBird),
  read: asyncErrorBoundary(read),
};
