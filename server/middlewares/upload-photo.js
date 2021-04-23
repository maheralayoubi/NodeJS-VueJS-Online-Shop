const aws = require('aws-sdk');
// Multer is a library for our api middleware to get the photo form the front end
const multer = require('multer');
// Multer-s3 is a library that upload the photo directly to AWS s3 bucket
const multerS3 = require('multer-s3');