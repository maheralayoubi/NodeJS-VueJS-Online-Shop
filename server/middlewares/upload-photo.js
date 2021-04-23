const aws = require('aws-sdk');
// Multer is a library for our api middleware to get the photo form the front end
const multer = require('multer');
// Multer-s3 is a library that upload the photo directly to AWS s3 bucket
const multerS3 = require('multer-s3');

// Access AWS S3 storage
aws.config.update({
    secretAccessKey: process.env.AWSAccessKeyId,
    accessKeyId: process.env.AWSSecretKey
})

const s3 = new aws.s3();

// Upload image function

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'shop-clone-v1',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {fieldName: file.fieldName});
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString())
        }
    })
})

module.exports = upload;


